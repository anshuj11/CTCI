

def perm ( arr)
    return arr if arr.length == 1
    res = []
    arr.each  do |el|
        if res.length == 0
            res << [el]
        else
            temp_res = [];
            p "res: ", res
            res.each do |e|
                e.each_index do |ind|
                    p "E: ", e, "Ind: ", ind
                  temp_res.push(e.slice(0,ind) + [el] + e.slice(ind, e.length - ind ))
                end
                temp_res.push(e+[el])
            end
            res = temp_res
        end    
    end
    res.map{|el| el.join("")}
end

p perm([1,2])
