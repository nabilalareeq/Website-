document.addEventListener('DOMContentLoaded', function() {
    // جلب المقالات من ملف JSON
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const articlesContainer = document.getElementById('articles-container');

            // تكرار عبر كل مقالة وإضافتها إلى الصفحة
            data.articles.forEach(article => {
                const articleCard = document.createElement('div');
                articleCard.classList.add('article-card');

                articleCard.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <a href="${article.link}">اقرأ المزيد</a>
                `;

                articlesContainer.appendChild(articleCard);
            });
        })
        .catch(error => console.error('حدث خطأ أثناء جلب المقالات:', error));
});
