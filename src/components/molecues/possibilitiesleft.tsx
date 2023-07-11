import React from 'react'

function PossibilitiesLeft() {
  return (
    <div className='flex flex-col items-end justify-end w-1/2 h-content'>
        <div className='flex flex-col w-1/3 h-content border-l-4 border-black min-w-[20rem]'>
            <p className="text-[2rem] font-bold ml-4">Jakie możliwości ma nasza aplikacja?</p>
        </div>
        <div className='flex flex-col w-2/3 h-content mt-4'>
            <p className="text-[1rem] font-bold m-4">Aplikacja dla serwisu może być przeznaczona dla różnych grup odbiorców. Może być to np. aplikacja dla klientów, którzy chcą łatwo i wygodnie korzystać z usług oferowanych przez serwis. Innym możliwym odbiorcą są pracownicy serwisu, którzy dzięki aplikacji będą mogli efektywniej zarządzać procesami biznesowymi, np. obsługiwać zamówienia, monitorować stan magazynu czy planować działania marketingowe.</p>
        </div>
        <div className='flex flex-row items-start justify-start'>
            <p className="text-[1rem] font-bold m-4">Wypróbuj Demo kliknij</p>
        </div>
    </div>
  )
}

export default PossibilitiesLeft