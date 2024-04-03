import React, { useState, useEffect } from 'react'
import { DocsThemeConfig, useTheme } from 'nextra-theme-docs'

function ThemedImage() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const _theme = theme == "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  const images = {
    "light": "https://lh3.googleusercontent.com/fife/ALs6j_G7DQkIj5f3meHkGos4OjcXlseHxj33a8-i8rRfQENnY71BAqAr9Y6w3qQzHbSjAFL7dm98HdOAOGtdLjPHv9hTIeqfJwWVqbqWH3FxmTBallwEytmQdEmk61WLcp32xbUM4lfaQtk3KIDA4epU0SbeZ0JC1mpAll24mJZBNB-EKsubSzbpB702oAYY-nwHOoY1AOU_2B85Cux0QVBM9grYOe2ir0czNMQSwW7TztGnSkZuKP-yG21ZDqzfscCGzZwurgURH2X7GYLCEdhQ22Z4oilWSpv6io7Df-ai6NJgz2-GOEBRsvbCx4Twlzi2LrauhqxUBCdWPYyV5I42z5NxinHPGoZCQlaikrnj423f-H8i5Woh1Z7JGUzraSSQPgE48IzhZzmlglhTV8opdaCKK36yeXIXnKoxGT5phRfh_lwCZcqhWfDe--1HWH_IyN19KesxKAjH-EiQgH1O9epZekcKY7u-uTS7PJ281dfvIs8a_F5LhV1uXJbKQ-KyaaFEiaN1rPLSMGk3lVyoavo5lGyjBjLjeIODo5Ol2PhNIWdVVrD9EtfB-4el2fOFZ3jNMxrkazi3S12y57uXkZoD9r7IqBNXUd79H5CqqHRrtMvsQ--UQYko58wnFN7kO2yyMaPOOfpiwR5NtfwAFygn7YvxFufAoUCYL5RqOao7OO4JHphw2sRa6gf1sNQhq8cd4dhjky7hEJAKsU32YumgAqnKmuSQn2yOdw027Q3KEmop16FQMdYee-KK1WKV1lRClZbCkDGzr9nBX8Rtp0bmFYfoYyNaRIQ3GffAYvIxOVPyErdTZe9slkCl2NYJXdzRHMRe7c5pPzw1D9_ojZHqOH6Pm8qgpLrKqinXPq1aYT9SFNLopWBZpSKg9zA-TcZ6lRmziuentqisWMkgyyvjmDNr3oKmNmVeec1UKFl784p8chJ8WeqUc2H5yYujZhlu5-eQaUj0JMzVph5hsBjsEPGOGvq2MEVUFsLN_gLlE71JrXWKx7U-EpEPz2vkRGjpqQTiFz1gtZpzalBJHMCpMpNbHZk87ZAzqLQkjxg_pEauieQlNZBDFoPocBh5rNjbQ1y1E9IpMzVfJcEouM6znr9u_ssWoKIHuEgBkQM-BTIDdWGju5BDg4D-EUkzBv73pPh6lAinTg-05beru81p2DGxvHMtpOzboA_oqGdufHMbG-dOdVGS3gexQuNONXA-TPjATW2dySMAEVa-ZXq6XXhB3ePKFEtNnUlSJrZWQhxttxbv-VRLIlH_oQb7AR73KA_HkinM3fiDdpapV7cCKOQ_Q3gPJ2aTRLdzT_iJR605deofqckhP75wlQrwO-Q4ugdncsgIVnOu29INKK0qO85WFMhOVxnsldcdiDrC0elZgIqg_7rG7boFSZEvUE7n6izXmzfTcdJuBz3mUqvptZdoFnWMdm0BnlhYyosgFmWZ7za4OK6kxTION7PkjDHTdhqn0860PT8D-MsWTHTBxkvICoPHZm-eSQEyNiZkhaF4XehtZKY0cd8BYpq2PCSkKN-ZnanCl4Ee9Sm437aFXznMnY2fXtcCHuIa8VlRRJzE0iZ9SkYs9Qiy6XCsiDis-MSLNKMDHoTlAIXhSSo-rFsQT3nn-Cen_nEdaS1urdvKO-9jqVXBZGDvqc5S-VpAAGPvaaxU4Dz5dN_pQfJKioxTn_kaghtL_E1ZdI0F3GmqZkeQnQ4xFMjLU3jNcaGqL8clhMzrkvlbC4ZLGbOdStEr=w1920-h973",
    "dark": "https://lh3.googleusercontent.com/fife/ALs6j_HwAT_dIJN22-EwX7ThNZIPtUjPYxECySlwRQxbV8H_FyGjQ-96LdemZInEV5hOI3qGBxkK1JrK8JFHP4JfZ___Op3jWvau-hlsIumaC-H0DXYWFMAWG34ANgEG-M6ccUpgfNsQUWLFFHLhHshChmVkhPA-2IyQlgGyAgcIa94yV7qokX1Qi2_ngligSVSD5GN5Rm3bKOnWJunBSgYP9-kmQYXKsbzd3M1u1eWFZ_df5DjR5Wv-MLoYHy6pTsSd9DfAR6qR48TyZVuxaOuD2RP2USxmmDSIGj5PfQSTlXM1b0lq0YNygwlhu1o6Uvnz6MWi8L8R-dCM9h68fjOu6LQ3-QMw87u_vS5s00wo09yANAXd1GWgfsAGQVkoraNhPA2gbSGAuii-lIDAmymgdB1ZqGrlXan3OVXiJzw7XMQQUCTG15-vHJGRHTqat8PYCONcekJDuX6jcz96PBm1amQxD43KzzyJNPK5fvvH3kFmD11qCCxCkHy-M5jD_-siu-r1ErHPTrKmko38MmzResz7VlBcQufuBAjBmiVjez4vbVDDtHYjy4bClLHoz9U8MVyA73_-3_eFKFetKmEBRugPk-WQMjvB0A2keTcK4v53SQBGph0FgpzopduTrM2e6buYLw-ywvTGuvSlnBqqiwuTRUQp0BPMIb5bO8gP6Dnbq6ArtqV_74R2ptrtWkWiytt8AERah6R6EgiCPovuG7R8dAS4pKM-xD-evu7KZd1RD3PHKKN-kgLnrfIojEG8qYJlioE4-E1sLvjsAalvS0mqlGBxATpXm84qu5kPz8x0wpPUnKQNGXreltghgRk4A0rZxI3iRCIbe0wWm7s_O-UJ634C3E8oDAn3H7IfAdjBQbjrm8dUTGwGLqy7qbEZNhdUCdZwnp1HTksPn-YTtZXSZ5ty29oofLobnnrNYVazJTpB1kiffuK9ubOlrEkzEM8S3HOEmUOXSQ9KcvIj9go4GWzZq4NvFMZCvtq73HSNCma1fUCFdza8MIdaqi4eZ6NvEgDhI1B2pEb8zt5DQhJ6rO4zRfjbCvGUtMbnFQx2O43ee6PjiIOB60Sjh-ZEXgo4lEz1Xb7C4MFU2V0voe8iJ9GBtO5k-Ljr7oBUjZryeFjzWvMSNuVAT2LoRCfObixBmyZ-dBxiQQs4QaWdQmQpxDI7voAshu4PP3J9BuzujxV3bUNEDvwIazMgYpkLu1dGBH28tfQiHKpa5SJ6GA7UK6VPNh8b4RKjciwfE7FZSM2sNx8uxwOR60lLa25g6J13j3GjJ9Za0MHvme43Rzf5WUBcbtlu5IZaIMcIxFDdlb3rXHCzJz4FTWDHTBu8M6rWEMJdMuWqR-aqhm2uCF5FvN2IUfpxmOvv81OMpLSQeoAQaWTCs0pGNNsUeXtz9Dx9eEuoz2PCrDgBV72kXmWPqCePkh-roU9a998xxtFDNN26w5GwMRomoOqk-31CzS67_81ZKMdCJ-vrA_H1mN-Ivr1SLCNC0d6rmSvJ2rckvGKX9WD9cxPTs-ZOdUuZtIEcwSpVkQ3FntnwjBe1DAVn49Rbqrqi-SThtccZ7i4Sde5AFTgOKTbff9ubHvWU8QkDLTcn_g7ROfbKoEKP42bBGlAhUU7XOpNrEjW-1V2zRDt3NyT5Tl-Zy3nm_t5fvAgHyLZVS2eFLrKsL-7creke-zfxNtm0O4KYArJSeSnfeO1xlhJ9EnquZUkv0Ga9wsp-_iagpP0yJQxxQlxV0bPmXAxi_w=w1920-h973"
  }

  return (
    <div
      style={{
        paddingLeft: '130px',
        lineHeight: '80px',
        height: '80px',
        backgroundImage: `url('${images[_theme]}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '80px',
      }}
    >
    </div>
  )
}

const config: DocsThemeConfig = {
  primaryHue: {
    light: 29,
    dark: 29
  },
  logo: ThemedImage,
  project: {
    link: 'https://github.com/esx-framework',
  },
  chat: {
    link: 'https://discord.esx-framework.org',
  },
  docsRepositoryBase: 'https://github.com/esx-framework/docs-rewrite/',
  footer: {
    text: <span>
      <a href="https://www.esx-framework.org/" target="_blank">
        Copyright © {new Date().getFullYear()} ESX. All rights reserved.
      </a>
      <br></br>
      <a href="https://www.oxygenserv.com/en/" target="_blank">
        Powered by Oxygenserv
      </a>
    </span>
  },
  useNextSeoProps() {
    return {
      title: 'ESX Documentation',
      description: 'ESX Documentation',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://documentation.esx-framework.org',
        title: 'ESX Documentation',
        description: 'ESX Documentation',
      },

      additionalMetaTags: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          name: 'keywords',
          content: 'ESX, docs, documentation, ESX docs, ESX documentation, fivem documentation, fivem, fivem server, ESX framework, fivem server management, fivem franework, fivem server tutorial, fivem server management, reworked',
        },
      ],
      additionalLinkTags: [
        { //can't understand how this pathing works so links needed
          rel: 'icon',
          href: 'https://media.discordapp.net/attachments/1141377366589976747/1141617235752919040/favicon.png?width=320&height=320',
        },
      ]
    }
  }
}

export default config
