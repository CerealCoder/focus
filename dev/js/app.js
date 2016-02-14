import {toggleAboutBtn} from './lib/module'

toggleAboutBtn.addEventListener('click', function() {
    document.body.classList.toggle('show-about')
})
