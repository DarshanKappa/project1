

def sortResult(a, b):
    count = 0
    while True:
        if count==len(a) or count==len(b):
            return False
        if(a[count]==b[count]):
            count += 1
            continue
        else:
            return [a[count], b[count]]


def alienDict(n, k, d):

    kList = []
    
    count = 0
    current = d[0]
    while count<len(d)-1:
        print(count, "cccccccccccccccccccc")
        current = d[count]
        next_e = d[count+1]

        result = sortResult(current, next_e)
        print(result, "--------------------", kList)
        
        if result:
            if len(kList)==0:
                kList = [ [ result ] ]
            else: 
                first = None
                second = None
                for ind, i in enumerate(kList):
                    for index, j in enumerate(i):
                        for index2, k in enumerate(j):
                            if k == result[0]:
                                first = [ind, index, index2]
                            if k == result[1]:
                                second = [ind, index, index2]
                        
                print("index: ", first, second)

                if first!=None and second!=None and first[0]!=second[0]:

                    if first[0] < second[0]:
                        kList = kList[:first[0]] + kList[first[0]+1:second[0]] + kList[second[0]+1:] + [kList[first[0]]+kList[second[0]]]
                    else:         
                        kList = kList[:second[0]] + kList[second[0]+1:first[0]] + kList[first[0]+1:] + [kList[first[0]]+kList[second[0]]]

                elif first==None and second==None:
                    kList += [ [ result ] ]
                
                else:
                    list_no = first[0] if first else second[0]
                    print("list no: ", list_no)

                    if first!=None and second!=None and first[1]<second[1]:
                        count += 1
                        continue
                    
                    
                    elif first!=None and second!=None and first[1]>second[1]: 

                            if first:
                                kList[list_no] = kList[list_no][:first[1]] + result + kList[list_no][first[1]+1:]
                
                    else: 

                            if first:
                                kList[list_no] = kList[list_no][:first[1]] + result + kList[list_no][first[1]+1:]
                            elif second:
                                kList[list_no] = kList[list_no][:second[1]] + result + kList[list_no][second[1]+1:]
                        
                        
                    
                        
        count += 1

    print("000000000000000000", kList)

    return 


# def main():
#     # s = "bf biifablhhfekcjfhdklefkiihffedfjkklldcbfdldddbf bikjidjifidghfklddjchiebjbibdjadlgji bkblijbgjbkillhcblbjacadceahebbcafichcjedhbajlfkei bldgbfhkfdbcihbdkfejkdgikeclih cbielkdheejdicfjfeclbdliidkdcfifdgehlleikkdb cccfckhbglgfi cjjgibfkgegchldfaclliejhhcbjickadahbcdkialldfb eclbbfcjdfecfdkiblddaceclddfkaabjgalgiggacjdegf efdjhebdfebhhccahifhaififjbadhc eghcflfgkllde eidbdkcjicecjaiddfdcjkfj ejifhhdiclkkejdhidkhbhjdihbdkckfkgiidhadjdje elacahafeeghdgkic fag fbeidhlbfhcbjebaegidflileilejkijdfjdkiclabdfjeejeg gebfadchbgcikgkfifaga gialjghjjhhedflkkdjlhajdkhdakhadkkajgllgllbghk helekchjgeb iehdjcjefggkcafllgedfhjhhiahgc ike ikgjliklfblbagfafe ilfeajblklchcebejiggjhfbdcla jdlfbhdfjbdblgcceihcgiaachlhlhjhcglhcaf jeahcekiahlkidflijakdj jfhgbkchhgckahefbjcgaceibkiehallgiffddchacigefa jhlfhckghgkgfb kfcahfciklbakdgehkgfadggdcjcfaijkjlffjf kiidkhfcclldfceahaabjfgdi kjbchgcbbdghhk lfkdjkkeebibdidhjfkldkhecllebheehjhcaileeggafii lhd lkkkldcfbfekbjdfalhiddaiegkf lljjjgj"
#     s = "bf biifablhhfekcjfhdklefkiihffedfjkklldcbfdldddbf bikjidjifidghfklddjchiebjbibdjadlgji bkblijbgjbkillhcblbjacadceahebbcafichcjedhbajlfkei bldgbfhkfdbcihbdkfejkdgikeclih cbielkdheejdicfjfeclbdliidkdcfifdgehlleikkdb cccfckhbglgfi cjjgibfkgegchldfaclliejhhcbjickadahbcdkialldfb eclbbfcjdfecfdkiblddaceclddfkaabjgalgiggacjdegf efdjhebdfebhhccahifhaififjbadhc eghcflfgkllde eidbdkcjicecjaiddfdcjkfj ejifhhdiclkkejdhidkhbhjdihbdkckfkgiidhadjdje elacahafeeghdgkic fag fbeidhlbfhcbjebaegidflileilejkijdfjdkiclabdfjeejeg gebfadchbgcikgkfifaga gialjghjjhhedflkkdjlhajdkhdakhadkkajgllgllbghk helekchjgeb iehdjcjefggkcafllgedfhjhhiahgc ike ikgjliklfblbagfafe ilfeajblklchcebejiggjhfbdcla jdlfbhdfjbdblgcceihcgiaachlhlhjhcglhcaf jeahcekiahlkidflijakdj jfhgbkchhgckahefbjcgaceibkiehallgiffddchacigefa jhlfhckghgkgfb kfcahfciklbakdgehkgfadggdcjcfaijkjlffjf kiidkhfcclldfceahaabjfgdi kjbchgcbbdghhk lfkdjkkeebibdidhjfkldkhecllebheehjhcaileeggafii lhd lkkkldcfbfekbjdfalhiddaiegkf lljjjgj"

#     d = s.split(" ")

#     # d = ["baa", "abcd", "abca", "cab", "cada"]
#     print(alienDict(32, 12, d))

# main()



# ------------------------------------------------------------------------------------------------------

def markChecked(grid, land):
    total_rows = len(grid)
    total_cols = len(grid[0])
        
    for r in range(-1, 2):
        for c in range(-1, 2):
            row = land[0] + r
            col = land[1] + c
            if row < 0 or col < 0 or row >= total_rows or col >= total_cols:
                continue
            if grid[row][col] == 1:
                grid[row][col] = 2
                markChecked(grid, [row, col])
                
                

def numIslands(grid):
    queue = []

    for row, i in enumerate(grid):
        for col, j in enumerate(i):
            if j==1:
                queue.append([row, col])
        
    count = 0
    main_index = 0
    while main_index < len(queue):
        land = queue[main_index]

        if grid[land[0]][land[1]] == 2:
            main_index += 1
            continue
        
        markChecked(grid, land)
        
        for i in queue:
            print(i, "--", grid[i[0]][i[1]])
                    
        count += 1
        main_index += 1
    
    return count


# grid = [[0,1,1,1,0,0,0],[0,0,1,1,0,1,0]]
grid = [[0,1],[1,0],[1,1],[1,0]]
# print("Result: ", numIslands(grid))


# -----------------------------------------------------------------------------------------------------



def tour(list, n):
    
    start = 0
    fual = 0
    station = 0
    count = 0
    while True:
        count += 1
        fual += list[station][0]
        distance = list[station][1]
        next_station = (station + 1) % n 
        print(fual, distance)
        if distance > fual:
            fual = 0
            start = next_station
            station = next_station
        else: 
            fual -= distance
            station = next_station
            if station == start:
                break
        if count > n*2:
            return -1
    
    return start



# l = [[4, 6], [6, 5], [7, 3], [4, 5]]
def main():
    
    # l = "78 87 94 16 87 36 50 93 63 22 91 28 64 60 41 27 73 27 12 37 68 69 83 30 63 31 68 24 30 36 23 3 70 59 94 68 12 57 30 43 22 74 85 20 99 38 16 25 14 71 92 27 57 81 63 74 97 71 6 82 85 26 37 28 47 6 14 30"
    l = "55 52 33 100 77 61 40 69"
    li = l.split(" ")

    m_list = []
    t = []
    for index, v in enumerate(li):
        t.append(int(v))
        if index % 2 == 1:
            m_list.append(t)
            t = []
            
    print(m_list)
    print("Starting Point: ", tour(m_list, len(m_list)))
    
            

# main()



# ----------------------------------------------------------------------------------------------

class Nodelist:
    
    def __init__(self, x):
        self.data = x
        self.next = None
        
    def __repr__(self):
        return str(self.data)

def reverse_ll(head):
    new_head = None
    t2 = head
    while t2:
        temp = t2
        t2 = t2.next
        temp.next = new_head
        new_head = temp
                
    return new_head


def isPalindrome(head):
    
    # s = None
    # e = None
    size = 0
    
    i = head
    while i:
        size += 1
        i = i.next

    print(size)

    f = head
    s = None

    steps = int((size + 1)/2)
    st1 = 0 
    s = head
    while st1!=steps:
        s = s.next        
        st1+=1
    print(s)
    new_head = reverse_ll(s)
    h = new_head
    print('============================')

    while h!=None:
        print(h.data)
        # print(h.next)
        h = h.next
        
    print('============================')
    
    rr = int(size/2)
    t1 = 0

    for i in range(rr):
        if f.data!=new_head.data:
            return 0
        f = f.next
        new_head = new_head.next

    return 1


def main():
    
    l = [2, 3, 1, 2, 5, 2, 1, 3, 2]
    
    head = None
    last = None
    for index, i in enumerate(l):
        inst = Nodelist(i)
        if index==0:
            head = inst
        else:
            last.next = inst
        last = inst
        # print("----------------------")
        # print(i, last)
            
    h = head
    # while h!=None:
    #     print(h.data)
    #     # print(h.next)
    #     h = h.next
    
    print(isPalindrome(head))
    
    pass

# main()



# -------------------------------------------------------------------------------------------------------



def give_points(point, grid):

    no_rows = len(grid)
    no_colomns = len(grid[0])
    r = point[0]
    c = point[1]

    other_points = []

    for i in [-1, 1]:
        if r+i>=0 and r+i<no_rows:
            other_points.append([r+i, c])
        
    for j in [-1, 1]:
        if c+j>=0 and c+j<no_colomns:
            other_points.append([r, c+j])
            
    print(other_points)
    
    return other_points

def nearest(grid):
    
    points = []
    grid2 = []

    for i, row in enumerate(grid):
        row2 = []
        for j, col in enumerate(row):
            if col==1:
                points.append([i, j])
                row2.append(0)
            else:
                row2.append('inf')
        grid2.append(row2)
                
    print(grid2)
    print(points)
    
    for point in points:
        # queue = []
        print('---------------------------------', point)
        queue = []
        ps = give_points(point, grid)
        for i in ps:
            queue.append([i[0], i[1], 1])

        c = 0
        while c<len(queue):
            p = queue[c]
            print(p)
            if grid2[p[0]][p[1]]!=0:
                if grid2[p[0]][p[1]]=='inf':
                    grid2[p[0]][p[1]] = grid2[point[0]][point[1]]+p[2]
                    for i in give_points(p, grid):
                        queue.append([i[0], i[1], p[2]+1])
                elif grid2[point[0]][point[1]]+p[2]<grid2[p[0]][p[1]]:
                    grid2[p[0]][p[1]] = grid2[point[0]][point[1]]+p[2]
                    for i in give_points(p, grid):
                        queue.append([i[0], i[1], p[2]+1])
            print(grid2)
            c +=1
        
    return grid2



def main():

    grid = [
        [0, 1, 1, 0, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]

    # grid = [
    #     [1, 0, 1, 0, 0],
    #     [1, 1, 0, 0, 0],
    #     [0, 0, 0, 0, 0],
    #     [0, 0, 0, 0, 0],
    #     [1, 0, 0, 0, 0],
    #     [0, 0, 0, 0, 0],
    # ]

    print(nearest(grid))

    pass

# main()



# ---------------------------------------------------------------------------------


def nextLargeElement(arr, n):
    
    stack = []
    result = []
    
    ele = None
    while len(result)!=n:
        
        
        if ele==None:
            ele = arr.pop()

        print("-------------------------", ele)

        top = len(stack)==0 or stack[len(stack)-1]
        print(top)
        if len(stack)==0:
            result.append(-1)
            stack.append(ele)
            ele=None
        elif top>ele:
            result.append(top)
            stack.append(ele)
            ele=None
        elif top<=ele:
            stack.pop()
            
        
    result.reverse()
    print(result)
    
    
    return result


def main():
    
    # arr = [6, 8, 0, 1, 3]
    arr = [5, 4, 3, 2, 1]
    
    print(nextLargeElement(arr, len(arr)))

    pass

# main()



# ---------------------------------------------------------------------------------------------------------------

def BS_for_last(job, index):
    
    l = 0
    h = index - 1
    
    print("---------------------------")
    print(index)
    
    while l <= h:
        print(l, h)
        mid = (l + h) // 2
        print(mid, job)
        if job[mid][1] <= job[index][0]:
            if job[mid+1][1] <= job[index][0]:
                l = mid + 1
            else:
                return mid
        else:
            h = mid - 1
    return -1


def job_scheduling(job):
    
    sorted_job = sorted(job, key = lambda x : x[1])
    n = len(sorted_job)

    result = [0 for _ in range(n)]

    result[0] = sorted_job[0][2]

    for i in range(1, n):

        inclProf = job[i][2]

        last = BS_for_last(job, i)
        if last != -1:
            inclProf += job[last][2]
        
        print(inclProf, result)
        result[i] = max(inclProf, result[i-1])
        
    
    return result[n-1]


def main():
    
    n = 4
    l = [
        [1, 2, 50],
        [3, 5, 20],
        [6, 19, 100],
        [2, 100, 200],
    ]
    
    print(job_scheduling(l))
    
    pass

# main()



# ------------------------------------------------------------------------------------------------------------




