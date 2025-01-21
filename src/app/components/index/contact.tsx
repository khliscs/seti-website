export default function ContactSection() {

    return (
        <section className="bg-inerit">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-left text-gray-100 dark:text-white font-special">Kontaktiere uns</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl">Du brauchst hilfe? Schreibe uns auf Instagram @seti-gathering oder nutze das Kontakt Formular.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 font-medium text-gray-100 dark:text-gray-300 font-special">Deine E-Mail</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm font-mono focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-mono" placeholder="mustermann@mail.com" required></input>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-100  font-special">Betreff</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm font-mono text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-mono" placeholder="Thema deines Anliegens" required></input>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 font-medium text-gray-100 font-special">Dein Anliegen</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm font-mono text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 font-mono" placeholder="Beschreie uns dein Anliegen"></textarea>
                    </div>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                        <button className='ml-2 text-white px-4 py-2 text-base font-medium bg-red-900 hover:bg-red-700 transition'>
                            Absenden
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}