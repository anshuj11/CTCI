class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeLinkedLists(headOne, headTwo) {
    // Write your code here.
    let ptr1;
    let ptr2;
    let returnHead;
    let prev = null;
    if (headOne.value < headTwo.value) {
        ptr1 = headOne;
        returnHead = headOne;
        ptr2 = headTwo;
    } else {
        ptr2 = headOne;
        returnHead = headTwo;
        ptr1 = headTwo;
    }
    while (ptr1 && ptr2) {
        while (ptr1.value < ptr2.value) {
            prev = ptr1;
            ptr1 = ptr1.next;
        }
        prev.next = ptr2;
        prev = ptr2;
        ptr2 = ptr2.next;      
    }
    return returnHead;
}

// Do not edit the line below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;