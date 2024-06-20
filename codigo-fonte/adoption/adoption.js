html {
    scroll-behavior: smooth;
}

body {
    font-family: "montserrat";
    width: 100%;
    background-color: var(--primary-soft);
}

main {
    height: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    background-color: var(--primary-blue);
    border-radius: 15px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px 4px, rgba(0, 0, 0, 0.2) 0px 4px 0px inset;
}

.presentation .title {
    color: var(--primary-soft);
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 28px;
}

.presentation .subtitle {
    color: var(--primary-soft);
    font-size: 18px;
    font-weight: 600;
}

.indice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
}

.indice .title {
    color: var(--primary-blue);
    margin-bottom: 20px;
    font-size: 24px;
}

.indice .species {
    display: flex;
    gap: 20px;
}

.indice .species .species-btn {
    color: var(--primary-soft);
    background-color: var(--primary-gray);
    font-size: 18px;
    padding: 10px 40px;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
}

.indice .species .species-btn:hover {
    color: var(--primary-blue);
    background-color: var(--primary-orange);
    cursor: pointer;
}

.search-area {
    display: flex;
    justify-content: center;
    padding: 15px 50px;
    width: 100%;
}

.search-area .search {
    background-color: var(--background-soft);
    padding: 10px 20px;
    font-size: 18px;
    width: 100%;
    height: 48px;
    border-radius: 15px;
    border: none;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
}

.card {
    border: 2px solid var(--primary-orange);
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: white;
    color: var(--primary-blue);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 15px;
}

.card-content h3 {
    margin: 0;
    font-size: 1.5em;
}

.card-content p {
    margin: 10px 0;
}

.card-content ul {
    padding-left: 20px;
}

.card-content .btn a {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--primary-orange);
    color: var(--primary-soft);
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    transition: 0.3s ease-in-out;
}

.card-content .btn a:hover {
    background-color: var(--background-soft);
    cursor: pointer;
}

footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--primary-blue);
    color: var(--primary-soft);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px 4px, rgba(0, 0, 0, 0.2) 0px 4px 0px inset;
}

footer .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

footer .info p {
    margin: 0;
}

footer .credits {
    margin-top: 20px;
}

footer .credits .logo {
    font-size: 24px;
    color: var(--primary-soft);
}

footer .credits p {
    margin: 5px 0;
}

footer .social-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

footer .social-icons a {
    color: var(--primary-soft);
    font-size: 24px;
    transition: color 0.3s ease-in-out;
}

footer .social-icons a:hover {
    color: var(--primary-orange);
    cursor: pointer;
}
