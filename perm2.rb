def perm(a)
  return a if a.length < 2
  res = []
  a.each do |el| 
    if res.length == 0
        res << [el] 
    else       
        temp_res = []
        res.each do |e| 

            e.each_index do |i|
                temp_res.push( e.slice(0,i)+[el]+ e.slice(i,a.length - i))
            end
            temp_res.push(e+[el])
        end
        res = temp_res 
    end 
  end
  return res
end

p perm([1,2, 3])