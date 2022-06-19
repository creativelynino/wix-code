

/***
* This function gets the children of all elements that sits within a particular element.
***/

function getChildren (event) {
    try {
        let h = event.children,
            g = [],
            absolute = [];
        if (event.parent){
            absolute.push(event.parent);//console.log(event.parent.children)
        }
        for (var i = 0; i < h.length; i++) {
            let tea = h[i];
            absolute.push(tea);
            if (i >= (h.length - 1)) {
                if (tea.children) {
                    let p = tea.children
                    for (var j = 0; j < p.length; j++) {
                        g.push(p[j])
                    }
                }
                if (g.length > 0) {
                    i = -1;
                    h = g;
                    g = [];
                }
            } else {
                if (tea.children) {
                    let p = tea.children
                    for (var j = 0; j < p.length; j++) {
                        g.push(p[j])
                    }
                }
            }
        }

        return absolute;

    } catch (err) {
        console.log(err);
    }
}
