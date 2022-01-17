var data = [{
        name: 'a',
        children: [{
                name: 'b',
                children: [{
                    name: 'e'
                }]
            },
            {
                name: 'c',
                children: [{
                    name: 'f'
                }]
            },
            {
                name: 'd',
                children: [{
                    name: 'g'
                }]
            },
        ],
    },
    {
        name: 'a2',
        children: [{
                name: 'b2',
                children: [{
                    name: 'e2'
                }]
            },
            {
                name: 'c2',
                children: [{
                    name: 'f2'
                }]
            },
            {
                name: 'd2',
                children: [{
                    name: 'g2'
                }]
            },
        ],
    }
]


function ceng(data) {
    var result = [];
    var queue = data;
    // 运用队列的知识解决
    // 每次遍历当前的data
    while (queue.length > 0) {
        [...queue].forEach(ele=>{
            queue.shift();
            result.push(ele.name)
            ele.children && queue.push(...ele.children)
        })
    }
    return result
}
   

    // while (queue.length > 0) {
    //     console.log(queue,1);
    //     [...queue].forEach(child => {
    //     console.log(child,2);
    //         queue.shift();
    //     console.log(child,3);
    //         result.push(child.name);
    //         child.children && (queue.push(...child.children));
    //     });
    // }
   

console.log(ceng(data))