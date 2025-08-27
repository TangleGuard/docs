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
