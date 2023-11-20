    const root = document.querySelector('ul.root');
    const setFirstItemClassName = (level, ul) => {
        level --

        if(level > 0) {
            const liOriginArray = [...ul.children];
            liOriginArray.forEach(li => {
                const innerUls = [...li.children];

                innerUls.forEach(innerUl => setFirstItemClassName(level, innerUl));
            });
        } else {
            const liFirst = ul.querySelector('li:first-of-type');
            liFirst.classList.add('first')
        }
    };

    const lastElements = document.querySelectorAll('.root ul li:last-child');
    lastElements.forEach(li => { li.classList.add('last')});

    setFirstItemClassName(2, root)