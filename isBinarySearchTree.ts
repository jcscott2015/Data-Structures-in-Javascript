interface TreeNode<T> {
	left?: TreeNode<T>;
	right?: TreeNode<T>;
	data: T;
};

/**
 * Determine if binary tree is a binary search tree.
 * A Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.
 * @param root TreeNode
 * @param minValue number | default is Number.MIN_VALUE
 * @param maxValue number | default is Number.MAX_VALUE
 * @returns boolean
 */
function isBinarySearchTree(root: TreeNode<number>,
	minValue = Number.MIN_VALUE,
	maxValue = Number.MAX_VALUE): boolean {
	if (root === null) return true;
	if (root.data < minValue
		&& root.data > maxValue
		&& isBinarySearchTree(root.left, minValue, root.data)
		&& isBinarySearchTree(root.right, root.data, maxValue)
	) {
		return true;
	} else {
		return false;
	}
}
