---
title: "Visualization"
sidebar:
  order: 1
---

TangleGuard offers the capability to explore the source code as an interactive graph diagram.
It provides you with high level diagrams which shows your declared layers and how their are related to each other and more in depth diagrams for each package, where you can see how your modules are related to each other.

- Workspace visualization as **graph diagram**
- Package and module structure visualizations

TangleGuard reveals the system’s key building blocks and shows you how they depend on one another.
It renders your source code as a directed graph diagram using [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) and the [Dagre layout](https://github.com/cytoscape/cytoscape.js-dagre).

The diagrams are interactive. You can move the nodes and layers around as you like.
Currently it's not possible to save the custom layout but that is a priority item on the [roadmap](/welcome/roadmap/).

## Layers overview
The workspace overview shows the highest level components, which are the layers only.

![Dashboard](../../../assets/dashboard.jpeg)

## Layers and packages
You can also explore the internals of each package.
Each node of the graph represents a package, and the edges represent dependencies between them.

![Layers and packages](../../../assets/packages-within-layers.jpeg)

## Modules within a package

![Metrics](../../../assets/package-internals.jpeg)


## Exmaples

Here you see some visualization examples of open-source projects.

For each project you'll first see the an overview of the Cargo workspace.
Each node represents a package from the repository.

For some repositories you'll find examples component diagrams of specific packages.
There, each node represents a module.

### ripgrep
https://github.com/BurntSushi/ripgrep
#### Packages
![ripgrep overview](/images/examples/ripgrep.png)

#### grep-cli
![ripgrep package](/images/examples/ripgrep-grep-cli.png)

#### grep-printer
![ripgrep package](/images/examples/ripgrep-grep-printer.png)


### Spacedrive
https://github.com/spacedriveapp/spacedrive
#### Packages
![Package overview of spacedrive](/images/examples/spacedrive-packages.png)
#### Core
![Package overview of spacedrive](/images/examples/spacedrive-core.png)

### Ruff
https://github.com/astral-sh/ruff
#### Packages
![Ruff](/images/examples/ruff-packages.png)

#### ruff_formatter
![Ruff](/images/examples/ruff-ty.png)

#### ruff_python_formatter
![Ruff](/images/examples/ruff-formatter2.png)

### Vector
https://github.com/vectordotdev/vector

#### Packages
![Vector](/images/examples/vector.png)
