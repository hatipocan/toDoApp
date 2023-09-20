const projectAdder = () => {

    const projectNameInput = document.getElementById('project-name');
    const addProjectButton = document.getElementById('add-project');

    //main container of the project
    const mainContainer = document.querySelector('.container');


    const projectMainContainer = document.createElement('details');
    projectMainContainer.classList.add('project-main-container');
    

    const projectSummary = document.createElement('summary');
    projectSummary.classList.add('project-summary');

    const projectNav = document.createElement('nav');
    projectNav.classList.add('project-nav');

    const projectTitleContainer = document.createElement('ul');
    projectTitleContainer.classList.add('project-title-container');

    const projectTitleList = document.createElement('li');
    projectTitleList.classList.add('project-title-list');

    const projectActionsContainer = document.createElement('ul');
    projectActionsContainer.classList.add('project-actions-container');

    const actionsInputList = document.createElement('li');
    actionsInputList.classList.add('actions-input-list');

    const actionsInput = document.createElement('input');
    actionsInput.classList.add('actions-input');
    actionsInput.setAttribute('type', 'text');
    actionsInput.setAttribute('placeholder', 'Enter Action Here');

    // add to function
    const actionsAddList = document.createElement('li');
    actionsAddList.classList.add('actionas-add-list');

    const addActionButton = document.createElement('a');
    addActionButton.setAttribute('href', '#');
    addActionButton.setAttribute('class', 'add-action-button');
    addActionButton.setAttribute('role', 'button');
    addActionButton.innerText = 'Add Action';





    addProjectButton.addEventListener('click', ()=> {
    const mainContainer = document.querySelector('.container');


    const projectMainContainer = document.createElement('details');
    projectMainContainer.classList.add('project-main-container');
    

    const projectSummary = document.createElement('summary');
    projectSummary.classList.add('project-summary');

    const projectNav = document.createElement('nav');
    projectNav.classList.add('project-nav');

    const projectTitleContainer = document.createElement('ul');
    projectTitleContainer.classList.add('project-title-container');

    const projectTitleList = document.createElement('li');
    projectTitleList.classList.add('project-title-list');

    const projectActionsContainer = document.createElement('ul');
    projectActionsContainer.classList.add('project-actions-container');

    const actionsInputList = document.createElement('li');
    actionsInputList.classList.add('actions-input-list');

    const actionsInput = document.createElement('input');
    actionsInput.classList.add('actions-input');
    actionsInput.setAttribute('type', 'text');
    actionsInput.setAttribute('placeholder', 'Enter Action Here');

    const actionsAddList = document.createElement('li');
    actionsAddList.classList.add('actionas-add-list');

    const addActionButton = document.createElement('a');
    addActionButton.setAttribute('href', '#');
    addActionButton.setAttribute('class', 'add-action-button');
    addActionButton.setAttribute('role', 'button');
    addActionButton.innerText = 'Add Action';



        mainContainer.appendChild(projectMainContainer);
        projectMainContainer.appendChild(projectSummary);
        projectSummary.appendChild(projectNav);
        projectNav.appendChild(projectTitleContainer);
        projectTitleList.innerText = projectNameInput.value;
        projectTitleContainer.appendChild(projectTitleList);

        projectNav.appendChild(projectActionsContainer);
        projectActionsContainer.appendChild(actionsInputList);
        actionsInputList.appendChild(actionsInput);

        projectActionsContainer.appendChild(actionsAddList);
        actionsAddList.appendChild(addActionButton);

        addActionButton.addEventListener('click', (e)=> {

            e.preventDefault();

            const actionsNav = document.createElement('nav');
            actionsNav.classList.add('actions-nav');

            const actionTitleContainer = document.createElement('ul');
            actionTitleContainer.classList.add('actions-title-container');

            const actionTitle = document.createElement('li');
            actionTitle.innerText = actionsInput.value;

            const actionsCommandsContainer = document.createElement('ul');
            actionsCommandsContainer.classList.add('actions-commands-container');

            const commandsInputList = document.createElement('li');
            commandsInputList.classList.add('commands-input-list');
            
            const commandsInput = document.createElement('input');
            commandsInput.setAttribute('class', 'commands-input');
            commandsInput.setAttribute('type', 'date');
            commandsInput.setAttribute('id', 'date');
            commandsInput.setAttribute('name', 'date');

            const commandsRemoveList = document.createElement('li');
            commandsRemoveList.classList.add('commands-remove-list');

            const removeActionButton =document.createElement('a');
            removeActionButton.setAttribute('class', 'remove-action-button');
            removeActionButton.setAttribute('href', '#');
            removeActionButton.setAttribute('role', 'butoon');
            removeActionButton.innerText = 'Remove'

            




            projectMainContainer.appendChild(actionsNav);
            actionsNav.appendChild(actionTitleContainer);
            actionTitleContainer.appendChild(actionTitle);
            actionsNav.appendChild(actionsCommandsContainer);
            actionsCommandsContainer.appendChild(commandsInputList);
            commandsInputList.appendChild(commandsInput);
            actionsCommandsContainer.appendChild(commandsRemoveList);
            commandsRemoveList.appendChild(removeActionButton);

            removeActionButton.addEventListener('click', ()=>{
                projectMainContainer.removeChild(actionsNav);
            })


            projectMainContainer.setAttribute('open', '')
        });
        

    });

   


}

export default projectAdder;