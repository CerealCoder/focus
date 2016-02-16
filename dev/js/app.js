import {toggleAboutBtn} from './lib/dom'
import {hello} from './lib/player'

toggleAboutBtn.addEventListener('click', function() {
    document.body.classList.toggle('show-about')
})
