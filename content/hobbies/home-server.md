+++
title = "Personal Home Server"
+++


## Hardware
My current server is housed in a small 10 in 4U server rack that fits snuggly under my desk. Each component is housed in a 3D printed bracket. The current configuration has a 3D printed patch panel, switch, and compute node.

<details>

<summary>Hardware Links</summary>

* Rack: [Rackmate T0](https://deskpi.com/products/deskpi-rackmate-t1-rackmount-10-inch-4u-server-cabinet-for-network-servers-audio-and-video-equipment)
* Router: [Unifi Cloud Gateway Ultra](https://store.ui.com/us/en/products/ucg-ultra)
* Switch: [Unifi Lite 8](https://store.ui.com/us/en/category/switching-utility/products/usw-lite-8-poe)
* Main Server: [Optiplex 7050](https://www.dell.com/support/manuals/en-us/optiplex-7050-desktop/optiplex-7050-desktop-micro-owners-manual/physical-dimension-specifications?guid=guid-55fb5400-0b54-48e7-97c9-dbbf658c5bec&lang=en-us)
* Kubernetes Server: [Minisforum UN100](https://store.minisforum.com/products/minisforum-un100p)

</details>

## Main Compute Node
I am running Proxmox on my main compute node as a general purpose hypervisor. There is a few utility LXC containers such as piHole for DNS and Tailscale to access my home network from anywhere.

## Kubernetes Services
My main goal with this iteration of my homelab is to deepen my understanding of Kubernetes while adopting GitOps practices to manage my environment. With FluxCD, I can version-control my manifests in Git, making it simple to deploy and update services. 