export default function Greetings({lang, children}){
    switch (lang)
    {
    case 'de': 
        lang = 'Hallo'
        break;
    case 'en':
        lang = 'Hello'
        break;
    case 'es':
        lang = 'Hola'
        break;
    case 'fr':
        lang = 'Bonjour'
        break;
    }

    return(
        <div><span>{lang} </span>{children}</div>
    )
}