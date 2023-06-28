import json
import cv2
import numpy as np
import matplotlib.pyplot as plt


# Take the image and return an ocupancy grid
def convert_to_occupancy_grid(image_path, threshold=128, grid_size=(100, 100)):
    # Load the image
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    plt.imshow(image)
    plt.show()

    # Resize the image to the desired grid size
    resized_image = cv2.resize(image, grid_size)

    # Binarize the resized image based on the threshold
    _, binary_image = cv2.threshold(resized_image, threshold, 255, cv2.THRESH_BINARY)

    # Invert the binary image (if necessary)
    binary_image = cv2.bitwise_not(binary_image)

    # Convert the binary image to an occupancy grid
    occupancy_grid = np.zeros_like(binary_image, dtype=bool)
    occupancy_grid[binary_image > 0] = True

    return occupancy_grid

#save the grid in a txt
# TODO: export to the db
def export_occupancy_grid_to_txt(occupancy_grid, output_path):
    np.savetxt(output_path, occupancy_grid, fmt='%d')

# export the graph as JSON
# TODO: export it to the db
def export_graph_to_json(graph, output_path):


    json_object = json.dumps(graph, indent=4)

    with open(output_path, "w") as outfile:
        outfile.write(json_object)

# Genrate the graph from the occupancy grid
def generate_graph(occupancy_grid):
    graph = {}

    grid_width = occupancy_grid.shape[1]
    grid_height = occupancy_grid.shape[0]

    for y in range(grid_height):
        for x in range(grid_width):
            if occupancy_grid[y][x] == 1:
                continue  # Ignorer les cellules occupées

            node_id = f"{x},{y}"
            neighbors = []

            if x > 0 and occupancy_grid[y][x - 1] != 1:
                neighbors.append(f"{x - 1},{y}")
            if x < grid_width - 1 and occupancy_grid[y][x + 1] != 1:
                neighbors.append(f"{x + 1},{y}")
            if y > 0 and occupancy_grid[y - 1][x] != 1:
                neighbors.append(f"{x},{y - 1}")
            if y < grid_height - 1 and occupancy_grid[y + 1][x] != 1:
                neighbors.append(f"{x},{y + 1}")

            graph[node_id] = neighbors

    return graph

# Example usage2

if __name__ == '__main__':
    image_path = "frontend/src/assets/magasinPlan.png"
    output_path_grid = "frontend/src/assets/occupancy_grid.txt"
    output_path_graph = "frontend/src/assets/occupancy_graph.json"



    occupancy_grid = convert_to_occupancy_grid(image_path)
    graph = generate_graph(occupancy_grid)

    print(graph)
    # export_occupancy_grid_to_txt(occupancy_grid, output_path_grid)
    export_graph_to_json(graph, output_path_graph)


