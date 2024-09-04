document.addEventListener('DOMContentLoaded', () => {
    searchBar();
    displayHeadings();
});

// Grab and display all level 1 headings on a page
let displayHeadings = () => {
    const headings = document.querySelectorAll('h1');
    const list = document.querySelector('#headings-list');
    
    headings.forEach(heading => {
        const listItem = document.createElement('li');
        listItem.textContent = heading.textContent;
        listItem.setAttribute("id", listItem.textContent);
        list.appendChild(listItem);
    });

    list.style.display = 'block';
}

// Function to provide functionality for the search bar
let searchBar = () => {
    const searchInput = document.querySelector('#search-input');
    const dropdown = document.querySelector('#dropdown');
    const itemDetails = document.querySelector('#page-links ul');

    const items = Array.from(itemDetails.children).map(li => li.textContent.trim().toLowerCase());

    if (!searchInput) {
        return;
    }

    const filterItems = (query) => {
        let lowerQuery = query.toLowerCase();
        let filtered = items.filter(item => item.toLowerCase().includes(lowerQuery.toLowerCase()));
        return filtered;
    }
    
    // Populate dropdown with filtered items
    const populateDropdown = (filteredItems) => {
        dropdown.textContent = '';
        
        if (filteredItems.length === 0) {
            dropdown.style.display = 'none';
            return
        }
        
        for (let i = 0; i < filteredItems.length; i++) {
            const item = filteredItems[i];
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => handleItemClick(item));
            dropdown.appendChild(li);
        };
        
        dropdown.style.display = 'block';
    }
    
    // Handle selection of an item
    const handleItemClick = (item) => {
        const url = item.toLowerCase().replace(/\s+/g, '-') + '.html';
        window.location.href = './html_pages/' + url;
    }
    
    //Event listener for input changes
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const filteredItems = filterItems(query);
        populateDropdown(filteredItems);
    });
    
    // If no matches dont display anything
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    })
}