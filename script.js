let searchBar=document.getElementById("search-bar")
let searchButton=document.getElementById("search-button")
let sortAtoZButton=document.getElementById("sortA-Z")
let sortZtoAButton=document.getElementById("sortZ-A")
let sortByMarksButton=document.getElementById("sortByMarks")
let sortByPassingButton=document.getElementById("sortByPassing")
let sortByClassButton=document.getElementById("sortByClass")
let sortByGenderButton=document.getElementById("sortByGender")
let table=document.getElementById("Student-data-display")
let tableBody=document.getElementById("table-Body")
let studentInfoSection=document.getElementById("students-Information")





let studentData=[]

async function fetchingData(){

    const url=`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`
    const response=  await fetch(url)
    const data= await response.json()

     studentData=data
     return studentData

}



fetchingData().then((studentData)=>{
   displaydata(studentData)
   sortAtoZButton.addEventListener("click" ,()=>{
    sortAtoZ(studentData)
   })
   sortZtoAButton.addEventListener("click" ,()=>{
    sortZtoA(studentData)
   })
   sortByMarksButton.addEventListener("click" ,()=>{
    sortByMarks(studentData)
   })
   sortByPassingButton.addEventListener("click" ,()=>{
    sortByPassing(studentData)
   })
   sortByClassButton.addEventListener("click" ,()=>{
    sortByClass(studentData)
   })
   sortByGenderButton.addEventListener("click" ,()=>{
    sortByGender(studentData)
   })
})

function displaydata(studentData) {
    tableBody.innerHTML=""
    studentData.forEach(student=> {
      let tableRow= document.createElement("tr") 

    let id=document.createElement("td")
    id.innerText=student.id

    let nameAndImage=document.createElement("td")
    let nameColumn=document.createElement("div")
    nameColumn.className="nameColumn"
    let img=document.createElement("img")
    img.src=student.img_src
    let name=document.createElement("p")
    name.innerText=`${student.first_name} ${student.last_name}`

    nameColumn.appendChild(img)
    nameColumn.appendChild(name)
    nameAndImage.appendChild(nameColumn)


    let gender=document.createElement("td")
    gender.innerText=student.gender

    let Class=document.createElement("td")
    Class.innerText=student.class

    let marks=document.createElement("td")
    marks.innerText=student.marks

    let passStatus=document.createElement("td")
    if(student.passing===true){
        passStatus.innerText="Passed"
    }
    else{
        passStatus.innerText="Failed"
    }

    let email=document.createElement("td")
    email.innerText=student.email
   

   
    tableRow.appendChild(id)
    tableRow.appendChild(nameAndImage)
    tableRow.appendChild(gender)
    tableRow.appendChild(Class)
    tableRow.appendChild(marks)
    tableRow.appendChild(passStatus)
    tableRow.appendChild(email)

    tableBody.appendChild(tableRow)
    table.appendChild(tableBody)

    });
    
}

function sortAtoZ(studentData){
    let sortedAtoZArray=studentData
    sortedAtoZArray.sort((a,b)=>{
        if(a.first_name<b.first_name){
            return -1;
        }
        else if(a.first_name===b.first_name){
            if(a.last_name<b.last_name){
                return -1;
            }
            else if(a.last_name===b.last_name){
                return 0
            }
            else{
                return 1
            }
        }
        else{
            return 1
        }
    })

    displaydata(sortedAtoZArray)
}

function sortZtoA(studentData){
    let sortedZtoAArray=studentData
    sortedZtoAArray.sort((a,b)=>{
        if(a.first_name<b.first_name){
            return 1;
        }
        else if(a.first_name===b.first_name){
            if(a.last_name<b.last_name){
                return 1;
            }
            else if(a.last_name===b.last_name){
                return 0
            }
            else{
                return -1
            }
        }
        else{
            return -1
        }
    })

    displaydata(sortedZtoAArray)
}


function sortByMarks(studentData){
    let sortedMarksArray=studentData
    sortedMarksArray.sort((a,b)=>{
        return a.marks-b.marks
    })
    displaydata(sortedMarksArray)
}




function sortByPassing(studentData){
    let passedStudents=[]
    studentData.forEach((student)=>{
        if(student.passing===true){
            passedStudents.push(student)
        }
    })
   displaydata(passedStudents) 

}




function sortByClass(studentData){
    let sortedClassArray=studentData

sortedClassArray.sort((a,b)=>{
    return a.class-b.class
})

displaydata(sortedClassArray)

}




}

