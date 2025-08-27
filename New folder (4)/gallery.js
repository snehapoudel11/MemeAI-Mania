document.addEventListener('DOMContentLoaded', function() {
    // Sample meme data (in a real app, you'd fetch this from an API)
    const memes = [
        { 
            id: 1, 
            title: "Distracted Boyfriend", 
            image: "distracted-boyfriend.jpg", 
            category: "trending", 
            tags: ["reaction", "funny", "relationships"] 
        },
        { 
            id: 2, 
            title: "Drake Hotline Bling", 
            image: "drake.jpg", 
            category: "classic", 
            tags: ["reaction", "approval"] 
        },
        // Add 20+ more memes...
    ];
    
    const memeGrid = document.querySelector('.meme-grid');
    const modal = document.getElementById('memeModal');
    const modalImg = document.getElementById('modalMemeImage');
    const searchInput = document.getElementById('memeSearch');
    const filterButtons = document.querySelectorAll('.category-filters button');
    let currentFilter = 'all';
    let visibleMemes = 12;
    
    // Initialize Masonry grid
    const msnry = new Masonry(memeGrid, {
        itemSelector: '.meme-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20
    });
    
    // Load memes into grid
    function loadMemes(filter = 'all', searchTerm = '') {
        memeGrid.innerHTML = '<div class="grid-sizer"></div>';
        
        let filteredMemes = memes;
        
        // Apply category filter
        if(filter !== 'all') {
            filteredMemes = filteredMemes.filter(meme => 
                meme.category === filter || meme.tags.includes(filter)
            );
        }
        
        // Apply search filter
        if(searchTerm.length > 2) {
            const term = searchTerm.toLowerCase();
            filteredMemes = filteredMemes.filter(meme => 
                meme.title.toLowerCase().includes(term) ||
                meme.tags.some(tag => tag.includes(term))
            );
        }
        
        // Limit to currently visible memes
        const memesToShow = filteredMemes.slice(0, visibleMemes);
        
        // Display memes
        memesToShow.forEach(meme => {
            const memeItem = document.createElement('div');
            memeItem.className = 'meme-item';
            memeItem.innerHTML = `
                <div class="meme-card">
                    <img src="assets/images/memes/${meme.image}" alt="${meme.title}">
                    <div class="meme-overlay">
                        <h3>${meme.title}</h3>
                        <button class="view-button">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                </div>
            `;
            memeGrid.appendChild(memeItem);
            
            // Add click event to view meme
            memeItem.querySelector('.view-button').addEventListener('click', () => {
                openModal(meme.image, meme.title);
            });
        });
        
        // Refresh Masonry layout
        msnry.reloadItems();
        msnry.layout();
        
        // Show/hide load more button
        document.getElementById('loadMore').style.display = 
            filteredMemes.length > visibleMemes ? 'block' : 'none';
    }
    
    // Open modal with selected meme
    function openModal(imageSrc, title) {
        modalImg.src = `assets/images/memes/${imageSrc}`;
        modalImg.alt = title;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    
    // Close modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    // Filter memes by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.category-filters .active').classList.remove('active');
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            visibleMemes = 12;
            loadMemes(currentFilter, searchInput.value);
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        visibleMemes = 12;
        loadMemes(currentFilter, this.value);
    });
    
    // Load more memes
    document.getElementById('loadMore').addEventListener('click', function() {
        visibleMemes += 12;
        loadMemes(currentFilter, searchInput.value);
    });
    
    // Modal actions
    document.getElementById('customizeMeme').addEventListener('click', function() {
        alert('This would open a meme editor in a real app!');
    });
    
    document.getElementById('downloadMeme').addEventListener('click', function() {
        alert('Meme downloaded! (This would trigger a download in a real app)');
    });
    
    document.getElementById('shareMeme').addEventListener('click', function() {
        alert('Sharing meme! (This would open share dialogs in a real app)');
    });
    
    // Initial load
    loadMemes();
});