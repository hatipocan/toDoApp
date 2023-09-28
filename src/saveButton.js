const saveButton = () => {

    const saveButton = document.getElementById('save-project');


    saveButton.addEventListener('click', () => {
    
        let htmlContents = document.documentElement;
        localStorage.setItem('myBook', htmlContents );




        

    });


    

    
    

};


export default saveButton;