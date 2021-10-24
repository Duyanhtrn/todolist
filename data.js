
const button = $(".button")
//danh sách việc cần làm
var datalist = 
[
    
]
//function render
function render(){
    $(".toDo-list").html("")
    for(let i = 0; i < datalist.length; i++){
    var thingToDo = 
    `
    <tr class = "things">
        <td class = "td1">${datalist[i]}</td> 
        <input> 
        <td class = "but_td"><button class = "delete" index = "${i}" ><i style = "width: 100%" class="fas fa-trash-alt"></i></button></td> 
        <td class = "but_td"><button class= "edit" index = "${i}"><i class="far fa-edit"></i></button></li></td> 
        <td class = "but_td"><button class= "status" index = "${i}"><i class="fas fa-check"></i></button></td>
    </tr>`
    $(".toDo-list").prepend(thingToDo)
    

   
    
}

    //Xóa thành phần trong list
    $(".delete").on("click", function(){
        const index = $(this).attr("index");
        datalist.splice(index,1);
        render();
    })

    //Mở modal chỉnh sửa
    $(".edit").on("click", function modal(){
        $(".bg-modal").css({visibility: 'visible'})
        const i = $(".delete").attr("index")
        $(".save").attr("index", i)
        //đóng cửa sổ chỉnh sửa 
        $(".close").on("click", function(){
            $(".bg-modal").css({visibility: "hidden"})
        })
        render()
    })
    //Chỉnh sửa danh sách
    $(".save").on("click", function(){
        const newval = $(".newVal").val()
        const index = $(this).attr("index")
        datalist[index] = newval;
        $(".bg-modal").css({visibility: "hidden"})
        render()
    })
    //Kiểm tra xem việc đã làm chưa
    $(".status").on("click", function check(){
        $(this).css({background: "greenyellow", color: "white"})
    })

    const count = document.querySelector(".count")
    count.textContent = datalist.length

    

}

//Thêm các thành phần vào
button.on("click", function addToDo(){
    const input = $(".input").val()
    if(input ===""){
        alert("Bạn chưa nhập công việc cần làm")
    }
    else{
        datalist.unshift(input)
        render();
    }
    
})
// xóa tất cả
$(".deleteAll").on("click", function(){
    datalist.splice(0, datalist.length)
    render()
})



