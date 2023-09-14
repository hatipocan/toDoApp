const projectAdder = () => {
    const addProjectButton = document.getElementById('add-project');
    addProjectButton.addEventListener('click', () => {
        const mainArticle = document.querySelector('.main-article');
        const projectInput = document.querySelector('#project-name').value;
        mainArticle.innerHTML += `
        <details>
                <summary>
                    <nav>
                        <ul class="strong-title">
                            <li><strong>${projectInput}</strong></li>
                        </ul>
                        <ul class="sub-details">
                            <li><input type="text" name="" id="action-input" placeholder="enter your action"></li>
                            <li><a href="#" role="button" id="add-action">Add Action</a></li>
                        </ul>
                        
                    </nav>
                </summary>
                <ul>
                    <li>
                        <nav>
                            <ul>
                                <li><strong></strong></li>
                            </ul>
                            <ul>
                                <li>
                                    <details role="list">
                                        <summary aria-haspopup="listbox">Progress</summary>
                                        <ul role="listbox">
                                            <li><a>In progress</a></li>
                                            <li><a>Completed</a></li>
                                        </ul>
                                      </details>
                                </li>
                                <li><a href="#" role="button">Due Date</a></li>
                            </ul>
                            
                        </nav>
                    </li>
                   
                </ul>
            </details>
        `;


    })
    

};

export default projectAdder;