# Linked List

### Description

A linked list is a linear data structure where elements are called **nodes,** not stored continuously in memory. Instead each node contains data and a **reference** or **link to the next node** in the sequence.

Each data is an object which has **data/value** property and **next** property. If we have no nodes to reference to, it will be pointing to **null**

First element is called the **Head** and the last element is called **Tail**

### Push

push method to push a new node to the linked list in the end

3 steps involved in pushing a new node - first creating a new node, second adding this new node to the tail of the linked list, third updating the tail to the new node

### Pop

pop method to remove the last item from the linked list

To do this pop, we need to iterate over the linked list, find the last element, point the prev element as tail and set next of tail element to null

here we have 2 values - **temp** and **prev.** Temp checks whether the node is the last element. Prev will be the before node of temp.

### Unshift

Unshift method is to add a new item at the start of the linked list

3 steps involved in adding a new item to the start - first creating a new node, second setting the next of new node to be the prev start node, third setting the new node to be head node

### Shift

Shift method is used to remove the first item of the linked list

2 steps involved - select the select element as the head, and set the next of first element to null
