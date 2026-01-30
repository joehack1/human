// Body part information database
const bodyPartInfo = {
    'head': {
        title: '🧠 Cerebral Cortex',
        description: 'The command center of your body, processing thoughts, memories, and sensory input.',
        details: 'Nerves: Trigeminal (V), Facial (VII), Vestibulocochlear (VIII)\nMuscles: Temporalis, Masseter, Frontalis\nPores: 100,000+ sweat glands per square inch'
    },
    'left-shoulder': {
        title: '🦾 Left Deltoid Region',
        description: 'Complex joint with multiple muscle layers enabling arm rotation and elevation.',
        details: 'Nerves: Axillary, Suprascapular, Musculocutaneous\nMuscles: Deltoid, Supraspinatus, Infraspinatus\nPores: 2,500+ per square centimeter'
    },
    'right-shoulder': {
        title: '🦾 Right Deltoid Region',
        description: 'Mirror structure to left shoulder, supporting bilateral arm movement coordination.',
        details: 'Nerves: Axillary, Suprascapular, Musculocutaneous\nMuscles: Deltoid, Supraspinatus, Infraspinatus\nPores: 2,500+ per square centimeter'
    },
    'left-arm': {
        title: '💪 Left Brachial System',
        description: 'Upper limb containing major muscle groups and neurovascular bundles.',
        details: 'Nerves: Radial, Median, Ulnar\nMuscles: Biceps Brachii, Triceps Brachii, Brachialis\nPores: 3,000+ per square centimeter'
    },
    'right-arm': {
        title: '💪 Right Brachial System',
        description: 'Upper limb with mirror anatomy to left arm for coordinated movement.',
        details: 'Nerves: Radial, Median, Ulnar\nMuscles: Biceps Brachii, Triceps Brachii, Brachialis\nPores: 3,000+ per square centimeter'
    },
    'chest': {
        title: '🛡️ Thoracic Cage',
        description: 'Protective bony structure housing vital organs with complex muscular attachments.',
        details: 'Nerves: Intercostal nerves (T1-T12)\nMuscles: Pectoralis Major/Minor, Intercostals\nPores: 1,500+ per square centimeter'
    },
    'stomach': {
        title: '🍽️ Abdominal Viscera',
        description: 'Digestive powerhouse with intricate muscular layers and extensive nerve networks.',
        details: 'Nerves: Vagus (X), Splanchnic nerves\nMuscles: Rectus Abdominis, External/Internal Obliques\nPores: 2,000+ per square centimeter'
    },
    'left-leg': {
        title: '🦵 Left Femoral System',
        description: 'Weight-bearing limb with powerful muscle groups and extensive vascular supply.',
        details: 'Nerves: Femoral, Sciatic, Tibial, Peroneal\nMuscles: Quadriceps, Hamstrings, Gastrocnemius\nPores: 4,000+ per square centimeter'
    },
    'right-leg': {
        title: '🦵 Right Femoral System',
        description: 'Mirror structure to left leg for balanced locomotion and weight distribution.',
        details: 'Nerves: Femoral, Sciatic, Tibial, Peroneal\nMuscles: Quadriceps, Hamstrings, Gastrocnemius\nPores: 4,000+ per square centimeter'
    },
    'left-hand': {
        title: '✋ Left Manual Dexterity',
        description: 'Precision instrument with intricate nerve endings and fine motor control.',
        details: 'Nerves: Median, Ulnar, Radial\nMuscles: Thenar, Hypothenar, Lumbricals\nPores: 5,000+ per square centimeter'
    },
    'right-hand': {
        title: '✋ Right Manual Dexterity',
        description: 'Highly sensitive extremity with specialized grip and manipulation capabilities.',
        details: 'Nerves: Median, Ulnar, Radial\nMuscles: Thenar, Hypothenar, Lumbricals\nPores: 5,000+ per square centimeter'
    },
    'left-foot': {
        title: '🦶 Left Plantar Support',
        description: 'Arch-based structure designed for weight distribution and balance.',
        details: 'Nerves: Tibial, Deep Peroneal, Superficial Peroneal\nMuscles: Flexor Digitorum, Gastrocnemius, Soleus\nPores: 6,000+ per square centimeter'
    },
    'right-foot': {
        title: '🦶 Right Plantar Support',
        description: 'Mirror structure to left foot providing stable foundation and propulsion.',
        details: 'Nerves: Tibial, Deep Peroneal, Superficial Peroneal\nMuscles: Flexor Digitorum, Gastrocnemius, Soleus\nPores: 6,000+ per square centimeter'
    }
};

// Position mapping for card placement
const positionOffsets = {
    'head': { x: -150, y: -200 },
    'left-shoulder': { x: -200, y: -50 },
    'right-shoulder': { x: 100, y: -50 },
    'left-arm': { x: -250, y: 50 },
    'right-arm': { x: 200, y: 50 },
    'chest': { x: -150, y: -100 },
    'stomach': { x: -150, y: 50 },
    'left-leg': { x: -200, y: 200 },
    'right-leg': { x: 150, y: 200 },
    'left-hand': { x: -300, y: 100 },
    'right-hand': { x: 300, y: 100 },
    'left-foot': { x: -200, y: 400 },
    'right-foot': { x: 150, y: 400 }
};

window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    const infoCard = document.getElementById('info-card');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');
    const cardDetails = document.getElementById('card-details');
    
    for (var i = 0; i < pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            let position = null;
            
            if (t.target.getAttribute('data-position') != null) {
                position = t.target.getAttribute('data-position');
            } else if (t.target.parentElement.getAttribute('data-position') != null) {
                position = t.target.parentElement.getAttribute('data-position');
            }
            
            if (position) {
                document.getElementById('data').innerHTML = position;
                showInfoCard(position, _piece);
            }
        }
    }
    
    // Hide card when clicking outside
    document.addEventListener('click', function(e) {
        const infoCard = document.getElementById('info-card');
        if (!infoCard.contains(e.target) && !e.target.closest('svg')) {
            hideInfoCard();
        }
    });
};

function showInfoCard(position, element) {
    const infoCard = document.getElementById('info-card');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');
    const cardDetails = document.getElementById('card-details');
    
    const info = bodyPartInfo[position];
    if (!info) return;
    
    // Set content
    cardTitle.textContent = info.title;
    cardDescription.textContent = info.description;
    cardDetails.textContent = info.details;
    
    // Position the card
    const rect = element.getBoundingClientRect();
    const offset = positionOffsets[position] || { x: 50, y: -100 };
    
    // Calculate position relative to viewport
    const cardX = rect.left + rect.width/2 + offset.x;
    const cardY = rect.top + rect.height/2 + offset.y;
    
    infoCard.style.left = cardX + 'px';
    infoCard.style.top = cardY + 'px';
    
    // Reset typing animations
    cardDescription.classList.remove('typing-complete');
    cardDetails.classList.remove('typing-complete');
    
    // Show card
    infoCard.style.display = 'block';
    setTimeout(() => {
        infoCard.classList.add('visible');
    }, 10);
    
    // Complete typing animation after delay
    setTimeout(() => {
        cardDescription.classList.add('typing-complete');
        cardDetails.classList.add('typing-complete');
    }, 3100);
}

function hideInfoCard() {
    const infoCard = document.getElementById('info-card');
    infoCard.classList.remove('visible');
    setTimeout(() => {
        infoCard.style.display = 'none';
    }, 400);
}
