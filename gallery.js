document.addEventListener('DOMContentLoaded', function() {
    // Sample meme data with placeholder images
    const memes = [
        { id: 1, image : "assets/meme (23).JPG", category: "trending", tags: ["reaction", "funny", "relationships"] },
        { id: 2, image: "assets/meme (2).PNG", category: "classic", tags: ["reaction", "approval"] },
        { id: 3, image: "assets/meme (3).JPG", category: "animals", tags: ["sad", "cat", "reaction"] },
        { id: 4, image: "assets/meme (4).JPG", category: "classic", tags: ["debate", "opinion"] },
        { id: 5, image: "assets/meme (5).JPG", category: "animals", tags: ["cat", "argument", "funny"] },
        { id: 6, image: "assets/meme (6).JPG", category: "trending", tags: ["decision", "dilemma"] },
        { id: 7, image: "assets/meme (7).JPG", category: "reaction", tags: ["shock", "surprise", "pokemon"] },
        { id: 8, image: "assets/meme (8).JPG", category: "trending", tags: ["intelligence", "evolution", "funny"] },
        { id: 9, image: "assets/meme (9).JPG", category: "classic", tags: ["confusion", "road", "sign"] },
        { id: 10, image: "assets/meme (10).JPG", category: "reaction", tags: ["escape", "panic", "funny"] },
        { id: 11, image: "assets/meme (11).JPG", category: "animals", tags: ["dog", "fire", "fine"] },
        { id: 12, image: "assets/meme (12).JPG", category: "classic", tags: ["smirk", "fire", "mischief"] },
        { id: 13, image: "assets/meme (13).JPG", category: "trending", tags: ["success", "happy", "child"] },
        { id: 14, image: "assets/meme (14).JPG", category: "classic", tags: ["unlucky", "fail", "funny"] },
        { id: 15, image: "assets/meme (15).JPG", category: "animals", tags: ["cat", "grumpy", "reaction"] },
        { id: 16, image: "assets/meme (16).JPG", category: "reaction", tags: ["temptation", "internal", "conflict"] },
        { id: 17, image: "assets/meme (17).JPG", category: "animals", tags: ["dog", "shiba", "internet"] },
        { id: 18, image: "assets/meme (18).JPG", category: "classic", tags: ["sarcasm", "reaction", "movie"] },
        { id: 19, image: "assets/meme (19).JPG", category: "reaction", tags: ["anger", "frustration", "cartoon"] },
        { id: 20, image: "assets/meme (20).JPG", category: "trending", tags: ["emotions", "reaction", "mood"] },
        { id: 21, image: "assets/meme (21).JPG", category: "trending", tags: ["reaction", "funny", "relationships"] },
        { id: 22, image: "assets/meme (22).JPG", category: "classic", tags: ["reaction", "approval"] },
        { id: 23, image: "assets/meme (1).PNG", category: "animals", tags: ["sad", "cat", "reaction"] },
        { id: 24, image: "assets/meme (24).JPG", category: "classic", tags: ["debate", "opinion"] },
        { id: 25, image: "assets/meme (25).JPG", category: "animals", tags: ["cat", "argument", "funny"] },
        { id: 26, image: "assets/meme (26).JPG", category: "trending", tags: ["decision", "dilemma"] },
        { id: 27, image: "assets/meme (27).JPG", category: "reaction", tags: ["shock", "surprise", "pokemon"] },
        { id: 28, image: "assets/meme (50).JPG", category: "trending", tags: ["intelligence", "evolution", "funny"] },
        { id: 29, image: "assets/meme (29).JPG", category: "classic", tags: ["confusion", "road", "sign"] },
        { id: 30, image: "assets/meme (30).JPG", category: "reaction", tags: ["escape", "panic", "funny"] },
        { id: 31, image: "assets/meme (31).JPG", category: "animals", tags: ["dog", "fire", "fine"] },
        { id: 32, image: "assets/meme (32).JPG", category: "classic", tags: ["smirk", "fire", "mischief"] },
        { id: 33, image: "assets/meme (33).JPG", category: "trending", tags: ["success", "happy", "child"] },
        { id: 34, image: "assets/meme (34).JPG", category: "classic", tags: ["unlucky", "fail", "funny"] },
        { id: 35, image: "assets/meme (35).JPG", category: "animals", tags: ["cat", "grumpy", "reaction"] },
        { id: 36, image: "assets/meme (36).JPG", category: "reaction", tags: ["temptation", "internal", "conflict"] },
        { id: 37, image: "assets/meme (37).JPG", category: "animals", tags: ["dog", "shiba", "internet"] },
        { id: 38, image: "assets/meme (38).JPG", category: "classic", tags: ["sarcasm", "reaction", "movie"] },
        { id: 39, image: "assets/meme (39).JPG", category: "reaction", tags: ["anger", "frustration", "cartoon"] },
        { id: 40, image: "assets/meme (40).JPG", category: "trending", tags: ["emotions", "reaction", "mood"] },
        { id: 41, image: "assets/meme (41).JPG", category: "trending", tags: ["reaction", "funny", "relationships"] },
        { id: 42, image: "assets/meme (42).JPG", category: "classic", tags: ["reaction", "approval"] },
        { id: 43, image: "assets/meme (43).JPG", category: "animals", tags: ["sad", "cat", "reaction"] },
        { id: 44, image: "assets/meme (44).JPG", category: "classic", tags: ["debate", "opinion"] },
        { id: 45, image: "assets/meme (45).JPG", category: "animals", tags: ["sad", "cat", "reaction"] },
        { id: 46, image: "assets/meme (46).JPG", category: "classic", tags: ["debate", "opinion"] },
        { id: 47, image: "assets/meme (47).JPG", category: "animals", tags: ["cat", "argument", "funny"] },
        { id: 48, image: "assets/meme (48).JPG", category: "trending", tags: ["decision", "dilemma"] },
        { id: 49, image: "assets/meme (49).JPG", category: "reaction", tags: ["shock", "surprise", "pokemon"] },
        { id: 50, image: "assets/meme 51.jpeg", category: "trending", tags: ["intelligence", "evolution", "funny"] },
    ];
    
    const memeGrid = document.querySelector('.meme-grid');
    const modal = document.getElementById('memeModal');
    const modalImg = document.getElementById('modalMemeImage');
    const searchInput = document.getElementById('memeSearch');
    const filterButtons = document.querySelectorAll('.category-filters button');
    let currentFilter = 'all';
    let initialVisibleMemes = 8;  
    let visibleMemes = initialVisibleMemes;
    let msnry = null;
    
    // Masonry init
    function initMasonry() {
        if (typeof Masonry !== 'undefined') {
            msnry = new Masonry(memeGrid, {
                itemSelector: '.meme-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                gutter: 20
            });
        } else {
            console.warn('Masonry not loaded. Using CSS grid fallback.');
            memeGrid.style.display = 'grid';
            memeGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
            memeGrid.style.gap = '20px';
        }
    }
    
    // Load memes
    function loadMemes(filter = 'all', searchTerm = '') {
        memeGrid.innerHTML = '';
        if (typeof Masonry !== 'undefined') memeGrid.innerHTML = '<div class="grid-sizer"></div>';
        
        let filteredMemes = memes;
        if (filter !== 'all') {
            filteredMemes = filteredMemes.filter(meme => 
                meme.category === filter || meme.tags.includes(filter)
            );
        }
        
        if (searchTerm.length > 2) {
            const term = searchTerm.toLowerCase();
            filteredMemes = filteredMemes.filter(meme => 
                (meme.title && meme.title.toLowerCase().includes(term)) ||
                meme.tags.some(tag => tag.includes(term))
            );
        }
        
        const memesToShow = filteredMemes.slice(0, visibleMemes);
        
        memesToShow.forEach(meme => {
            const memeItem = document.createElement('div');
            memeItem.className = 'meme-item';
            memeItem.innerHTML = `
                <div class="meme-card">
                    <img src="${meme.image}" alt="Meme Image" class="meme-image">
                    <div class="meme-info">
                        <h3 class="meme-title">${meme.title || "Untitled Meme"}</h3>
                        <span class="meme-category">${meme.category}</span>
                    </div>
                    <button class="view-button">
                        <i class="fas fa-expand"></i>
                    </button>
                </div>
            `;
            memeGrid.appendChild(memeItem);
            
            memeItem.addEventListener('click', () => openModal(meme.image, meme.title));
            memeItem.querySelector('.view-button').addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(meme.image, meme.title);
            });
        });
        
        if (msnry) {
            msnry.reloadItems();
            msnry.layout();
        }
        
        document.getElementById('loadMore').style.display = 
            filteredMemes.length > visibleMemes ? 'block' : 'none';
    }
    
    function openModal(imageSrc, title) {
        modalImg.src = imageSrc;
        modalImg.alt = title || "Meme";
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.category-filters .active').classList.remove('active');
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            visibleMemes = initialVisibleMemes;
            loadMemes(currentFilter, searchInput.value);
        });
    });
    
    searchInput.addEventListener('input', function() {
        visibleMemes = initialVisibleMemes;
        loadMemes(currentFilter, this.value);
    });
    
    document.getElementById('loadMore').addEventListener('click', function() {
        visibleMemes += 20;
        loadMemes(currentFilter, searchInput.value);
    });
    
    document.getElementById('customizeMeme').addEventListener('click', function() {
        alert('This would open a meme editor in a real app!');
    });
    
    document.getElementById('downloadMeme').addEventListener('click', function() {
        alert('Meme downloaded! (This would trigger a download in a real app)');
    });
    
    document.getElementById('shareMeme').addEventListener('click', function() {
        alert('Sharing meme! (This would open share dialogs in a real app)');
    });
    
    initMasonry();
    loadMemes();
});
