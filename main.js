// 页面加载完成后执行
 document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换功能
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有标签按钮的活跃状态
            tabBtns.forEach(b => b.classList.remove('active'));
            // 添加当前标签按钮的活跃状态
            this.classList.add('active');
            
            // 隐藏所有内容
            tabContents.forEach(content => content.classList.remove('active'));
            // 显示对应内容
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 导航栏滚动激活状态
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 对话模拟器功能
    const sendBtn = document.querySelector('.send-btn');
    const dialogueInput = document.querySelector('.dialogue-input input');
    const dialogueBox = document.querySelector('.dialogue-box');
    
    if (sendBtn && dialogueInput) {
        sendBtn.addEventListener('click', function() {
            const userInput = dialogueInput.value.trim();
            if (userInput) {
                // 添加用户消息
                const userMessage = document.createElement('div');
                userMessage.className = 'dialogue-message';
                userMessage.innerHTML = `<span class="sender">你:</span><span class="message">${userInput}</span>`;
                dialogueBox.insertBefore(userMessage, dialogueBox.lastElementChild);
                
                // 清空输入框
                dialogueInput.value = '';
                
                // 模拟系统回复
                setTimeout(() => {
                    const systemMessage = document.createElement('div');
                    systemMessage.className = 'dialogue-message';
                    systemMessage.innerHTML = `<span class="sender">系统:</span><span class="message">안녕하세요! 잘 하셨습니다! (你好！做得很好！)</span>`;
                    dialogueBox.insertBefore(systemMessage, dialogueBox.lastElementChild);
                    
                    // 滚动到底部
                    dialogueBox.scrollTop = dialogueBox.scrollHeight;
                }, 1000);
                
                // 滚动到底部
                dialogueBox.scrollTop = dialogueBox.scrollHeight;
            }
        });
        
        // 回车发送
        dialogueInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }
    
    // 语法错误诊断功能
    const diagnoseBtn = document.querySelector('.diagnose-btn');
    const diagnosisTextarea = document.querySelector('.diagnosis-form textarea');
    const diagnosisResult = document.querySelector('.diagnosis-result .result-content');
    
    if (diagnoseBtn && diagnosisTextarea && diagnosisResult) {
        diagnoseBtn.addEventListener('click', function() {
            const inputText = diagnosisTextarea.value.trim();
            if (inputText) {
                // 模拟诊断结果
                diagnosisResult.innerHTML = `
                    <p><strong>输入句子:</strong> ${inputText}</p>
                    <p><strong>诊断结果:</strong> 语法正确！</p>
                    <p><strong>建议:</strong> 继续保持，你的韩语水平很棒！</p>
                `;
            } else {
                diagnosisResult.innerHTML = '<p>请输入句子进行检查</p>';
            }
        });
    }
    
    // 游戏按钮点击效果
    const playBtns = document.querySelectorAll('.play-btn');
    playBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('游戏功能开发中，敬请期待！');
        });
    });
    
    // 社区按钮点击效果
    const communityBtns = document.querySelectorAll('.join-btn, .share-btn, .exchange-btn, .rank-btn, .create-post-btn');
    communityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('社区功能开发中，敬请期待！');
        });
    });
    
    // 登录/注册按钮点击效果
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('登录功能开发中，敬请期待！');
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            alert('注册功能开发中，敬请期待！');
        });
    }
    
    // 首页按钮点击效果
    const primaryBtn = document.querySelector('.primary-btn');
    const secondaryBtn = document.querySelector('.secondary-btn');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', function() {
            window.scrollTo({
                top: document.getElementById('words').offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
            window.scrollTo({
                top: document.getElementById('features').offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
    
    // 添加一些动画效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 图片加载错误处理
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
        });
    });
});

// 页面加载时的动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});