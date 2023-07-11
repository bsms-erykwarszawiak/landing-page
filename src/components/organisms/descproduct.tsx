import React from "react";
import Image from "next/image";

function DescProduct() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col md:flex-row w-full ">
        <p className=" text-start pb-10 text-3xl md:text-[2.5rem] font-bold text-[#E7E7E7] font-main md:w-[40%]">
          O Programie
        </p>
        <p className=" text-start pb-10 text-xl md:text-[1.25rem] text-[#E7E7E7] font-main md:w-[60%] md:font-normal">
          Jest kluczowym elementem zapewniającym bezpieczne, stabilne i
          efektywne korzystanie z witryny. Program ten odpowiada za całe
          działanie systemu, a jego ważne funkcjonalności obejmują algorytm
          wyszukiwania, bazy danych, łatwe zarządzanie treściami oraz odpowiedni
          poziom bezpieczeństwa. Program dla serwisu zwykle opiera się na bazach
          danych, które przechowują informacje o użytkownikach, artykułach,
          komentarzach i innych treściach. Dzięki temu program może skutecznie
          przeszukiwać i wyświetlać potrzebne dane, a bazy danych są
          zoptymalizowane pod kątem szybkości działania oraz umożliwiają
          skuteczne filtrowanie treści na podstawie różnych kryteriów. Algorytm
          wyszukiwania to kolejna ważna funkcjonalność programu dla serwisu,
          która umożliwia szybkie i łatwe wyszukiwanie potrzebnych informacji,
          takich jak artykuły, komentarze, posty i wiele innych.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:mt-[5rem]">
        <p className=" text-start pb-10 text-3xl md:text-[2.5rem] font-bold text-[#E7E7E7] font-main md:w-[40%]">
          Funkcie Programu
        </p>
        <div className="flex flex-col w-full md:w-[60%] md:font-normal">
          <div className="flex flex-row w-full items-start justify-start pb-8 ">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Bazy danych - to kluczowy element programu, który przechowuje
              informacje o użytkownikach, treściach oraz innych danych. Bazy
              danych umożliwiają skuteczne wyszukiwanie i filtrowanie treści
              oraz zapewniają szybkość działania serwisu.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Algorytm wyszukiwania - funkcjonalność, która umożliwia szybkie i
              łatwe wyszukiwanie potrzebnych informacji, takich jak artykuły,
              komentarze, posty i wiele innych. Algorytm ten jest zwykle
              zaprojektowany w oparciu o szereg czynników, takich jak
              popularność, daty publikacji czy tagi.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Zarządzanie treściami - program dla serwisu powinien umożliwiać
              łatwe zarządzanie treściami, takimi jak artykuły, komentarze,
              posty i wiele innych. Administracja serwisu powinna mieć możliwość
              edycji, usuwania i moderowania treści.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Bezpieczeństwo - program dla serwisu powinien zapewniać odpowiedni
              poziom bezpieczeństwa, w tym mechanizmy ochrony przed atakami,
              szyfrowanie danych oraz kontrolę dostępu użytkowników.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Personalizacja - program dla serwisu powinien umożliwiać
              dostosowanie treści do preferencji użytkowników, tak aby
              korzystanie z serwisu było bardziej intuicyjne i przyjemne.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Responsive design - program dla serwisu powinien być
              zaprojektowany w taki sposób, aby działał na różnych urządzeniach,
              takich jak komputery, tablety i smartfony.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Statystyki - program dla serwisu powinien umożliwiać monitorowanie
              ruchu na stronie, tak aby administracja serwisu mogła lepiej
              zrozumieć potrzeby użytkowników i dostosować treści do ich
              potrzeb.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Integracja z innymi aplikacjami - program dla serwisu powinien
              umożliwiać integrację z innymi aplikacjami, takimi jak media
              społecznościowe, narzędzia do analityki i inne.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:mt-[5rem]">
        <p className=" text-start pb-10 text-3xl md:text-[2.5rem] font-bold text-[#E7E7E7] font-main md:w-[40%]">
          Opis
        </p>
        <div className="flex flex-col md:w-[60%] md:font-normal md:text-[1.25rem]">
        <p className=" text-start pb-10 text-xl text-[#E7E7E7] font-main ">
          Aplikacja dla serwisu to oprogramowanie, które pozwala użytkownikom na
          wygodne i efektywne korzystanie z funkcjonalności danego serwisu
          internetowego. W zależności od charakteru serwisu, aplikacja może
          oferować różne funkcje, takie jak przeglądanie treści, komunikowanie
          się z innymi użytkownikami, publikowanie własnych treści, czy
          korzystanie z zaawansowanych opcji, takich jak filtrowanie,
          wyszukiwanie czy analiza danych.
        </p>
        <Image
          className="flex m-2"
          src="/assets/dashboard.svg"
          width={500}
          height={250}
          alt="?"
        />
        <p className=" text-start pb-10 text-xl text-[#E7E7E7] font-main">
          Aplikacja dla serwisu społecznościowego pozwala użytkownikom na łatwe
          przeglądanie treści udostępnionych przez innych użytkowników,
          komunikowanie się z nimi, publikowanie własnych treści, a także
          korzystanie z różnych funkcji społecznościowych, takich jak grupy,
          wydarzenia czy opcje powiadomień. W przypadku serwisu e-commerce,
          aplikacja może oferować możliwość przeglądania ofert, składania
          zamówień, płatności online, śledzenia statusu zamówienia, a także
          korzystania z opcji kuponów rabatowych i programów lojalnościowych.
        </p>
        <Image
          className="flex m-2"
          src="/assets/addrepair.svg"
          width={500}
          height={250}
          alt="?"
        />
        <p className=" text-start pb-10 text-xl text-[#E7E7E7] font-main">
          Aplikacja dla serwisu edukacyjnego może umożliwiać użytkownikom dostęp
          do materiałów edukacyjnych, tworzenie i przeglądanie notatek,
          korzystanie z narzędzi do nauki, takich jak quizy czy testy, a także
          komunikację z nauczycielami i innymi uczniami. W każdym przypadku,
          aplikacja dla serwisu zapewnia użytkownikom szybki i wygodny dostęp do
          funkcjonalności serwisu, co przyczynia się do zwiększenia satysfakcji
          użytkowników i poprawy doświadczeń związanych z korzystaniem z
          serwisu.
        </p>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row w-full md:mt-[5rem]">
        <p className=" text-start pb-10 text-3xl md:text-[2.5rem] font-bold text-[#E7E7E7] font-main md:w-[40%]">
          Dodatkowe Funkcje
        </p>
        <div className="flex flex-col w-full md:w-[60%]">
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Dedykowana baza danych MySQL - bez ograniczeń wielkości, z
              codziennym backupem, zgodna z wymogami GIODO w sprawie ochrony
              danych osobowych.
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Dedykowany serwis sprawdzania statusów on-line z domeną i logo
              klienta
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Dedykowane oprogramowanie RMA online do instalacji na serwerze
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Możliwość ustawienia własnego pola nadawcy w module SMS
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Stworzenie szablonu wydruku według wzoru klienta
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Migracja baz danych MySQL « » SQLite
            </p>
          </div>
          <div className="flex flex-row w-full items-start justify-start pb-8">
            <Image
              className="flex m-2"
              src="/assets/green.svg"
              width={5}
              height={5}
              alt="?"
            />
            <p className="flex font-main text-[#E7E7E7]">
              Wsparcie techniczne przy wdrożeniu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescProduct;
