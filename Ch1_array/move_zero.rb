def manhattan(pt1, pt2)
  (pt1[0]-pt2[0]).abs + (pt1[1]-pt2[1]).abs
end
def min_swaps(matrix)
    count = 0 
    matrix.each_with_index do |row, i|
        row.each_with_index do |cell, j| 
            # (i + 1) * row.length 
            correct_i = cell / row.length
            correct_j = cell % row.length 
# iteration should be with a while rather than each, and here you would make the swap, either up or down, depending on whats more convenient (up down left right) 
            diff = manhattan([i,j], [correct_i, correct_j])
            count += diff 
        end 
    end
    count 
end
matrix = [[3, 1, 2],
[4, 0, 5],
[6, 7, 8]]
p min_swaps(matrix)