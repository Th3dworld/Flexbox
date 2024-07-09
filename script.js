'use strict';

const dateTime = document.querySelector('.date');
dateTime.innerHTML =`${Intl.DateTimeFormat('en-US', {
    day: "numeric",
    month: 'long',
    year: 'numeric',
}).format(new Date)}`;