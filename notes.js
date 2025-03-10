// What is Angular and why would you use it?

    // Angular is a front-end JavaScript framework; it helps with building interactive, feature-rich interfaces.
    
// Angular isn't just a framework, its a collection a tools that come together with the framework with extra features.
    // Command-line interfaces to create and preview projects, debugging tools, plugins for IDEs, etc.


// Why would you use Angular? Instead of just JavaScript?
    // You might not even need it, but frameworks like Angular will simpliy the process of building complex, interactive web user interfaces, by giving you tools, concepts, etc.
        // 1. With Angular, you can write DECLARATIVE code, instead of IMPARATIVE code. With JS, you have to step-by-step instruction that will be executed by the browser. Example would be, Find the DOM element and sotre in variable, add event listener to element, in triggered function, find another element, etc.
            // With Angular, you define the TARGET states, so mark-up that contains special instructions that JS can't read; they allow you to define target states and then write logic that allows you to activate/deactivate, etc. Angular must figure out what the steps are to update the user interface.
                // Example: Manage "activeTab" state property. Depending on "activeTab", show different content. Change "activeTab" upon click on tab element.