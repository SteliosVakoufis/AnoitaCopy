function display_ui(){
    rectMode(CORNER);

    fill(100, 190, 0);
    rect(6, 0, 69 + (ids[inputMode].type.length * 8), 19);
    fill(70, 100, 20);
    rect(8, 0, 65 + (ids[inputMode].type.length * 8), 17);

    fill(255);
    text(" Input Type: ", 10, 13);
    fill(255);
    text(ids[inputMode].type + " ", 75, 13);

    text("Use mouse wheel for more options!" + " ", 50, 35);
}