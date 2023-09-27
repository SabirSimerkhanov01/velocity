// state
const state = {
    prevId: 0,
    id: 1,
};


// render
const render = (state) => {
    const prevEL = document.getElementById(`tab_card-${state.prevId}`);
    const el = document.getElementById(`tab_card-${state.id}`);

    const prevBtn = document.getElementById(`tab_button-${state.prevId}`);
    const btn = document.getElementById(`tab_button-${state.id}`);

    prevEL.classList.remove('block');
    prevEL.classList.add('none');

    prevBtn.classList.remove('open');
    prevBtn.classList.add('close');

    el.classList.add('block');
    el.classList.remove('none');

    btn.classList.add('open');
    btn.classList.remove('close');
};


// event
const tabButtons = document.querySelectorAll('.tab_button');
tabButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const id = e.target.id;
        state.prevId = state.id;
        state.id = Number((id.slice(id.length - 1)));
        render(state);
    });
});
