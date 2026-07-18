import { test, expect } from '@playwright/test';

test(" a tela de login mostra os elementos essenciais", async ({ page }) => {
    //1. chegar na tela
    //2. achar cada elemento
    //3. provar que está visível


await page.goto(process.env.BASE_URL + "/login.html");
const usuario = page.getByLabel("Usuário");
await expect(usuario).toBeVisible();

const senha = page.getByLabel("Senha");
await expect(senha).toBeVisible();

const entrar = page.getByRole("button", { name: "Entrar" });
await expect(entrar).toBeVisible();

});