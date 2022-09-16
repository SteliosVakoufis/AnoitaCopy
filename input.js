let inputMode = 1;

function mouseDragged(e) {
    //LEFT CLICK - SPAWN MATERIALS
    if (e.buttons == 1) {
        let input = { x: Math.round(mouseX), y: Math.round(mouseY) };
        print(input);
        if (input.x > 300 || input.x < 1 || input.y > 300 || input.y < 1) {
            return;
        }
        print(input);
        update_CanvasArray(input);
    }
}

function mouseWheel(e) {
    if (e.delta < 0) {
        //SCROLL UP
        changeInputMode(1);
    } else {
        //SCROLL DOWN
        changeInputMode(-1);
    }
}

function changeInputMode(input) {
    let modes = idColors.length - 1;

    inputMode += input;

    if (inputMode > modes) {
        inputMode = 0;
    } else if (inputMode < 0) {
        inputMode = modes;
    }
}
