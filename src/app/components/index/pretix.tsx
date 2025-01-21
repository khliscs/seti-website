import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser'
function PretixWidget() {
    const [html, setHtml] = useState<string | React.JSX.Element | React.JSX.Element[]>(<></>)

   useEffect(() => {
        const h = parse('<link rel="stylesheet" type="text/css" href="https://pretix.seti-gathering.net/Fractaliens/SETI25/widget/v1.css"> <script type="text/javascript" src="https://pretix.seti-gathering.net/widget/v1.en.js" async></script> <pretix-widget event="https://pretix.seti-gathering.net/Fractaliens/SETI25/" single-item-select="button"></pretix-widget> <noscript> <div class="pretix-widget"> <div class="pretix-widget-info-message"> JavaScript ist in Ihrem Browser deaktiviert. Um unseren Ticket-Shop ohne JavaScript aufzurufen, klicken Sie bitte <a target="_blank" rel="noopener" href="https://pretix.seti-gathering.net/Fractaliens/SETI25/">hier</a>. </div> </div> </noscript>')
        setHtml(h)
    }, [])
 
    useEffect(() => {
        console.log(html)

    }, [html])

    return (
        <div>
            <div>{html}</div>
        </div>
    );

}

export default PretixWidget;