
const API_KEY = process.env.CRYPTO_API_KEY

export async function GET(request: Request){
    // const limit = request.expoUrl.searchParams.get('limit') || 5;
    // const limit =  5;
    
    // const response = await fetch(
    //     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=INR`,
    //     {
    //         headers:{
    //             'X-CMC_PRO_API_KEY': API_KEY!
    //         }
    //     }
    // )
    
    // const res = await response.json();
    // return Response.json(res.data)
    return Response.json(data)

}

const data = [
    {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "num_market_pairs": 11793,
      "date_added": "2010-07-13T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "sha-256",
        "store-of-value",
        "state-channel",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "binance-labs-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "cms-holdings-portfolio",
        "dcg-portfolio",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "fabric-ventures-portfolio",
        "framework-ventures-portfolio",
        "galaxy-digital-portfolio",
        "huobi-capital-portfolio",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "1confirmation-portfolio",
        "winklevoss-capital-portfolio",
        "usv-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "multicoin-capital-portfolio",
        "paradigm-portfolio",
        "bitcoin-ecosystem",
        "ftx-bankruptcy-estate"
      ],
      "max_supply": 21000000,
      "circulating_supply": 19778106,
      "total_supply": 19778106,
      "infinite_supply": false,
      "platform": null,
      "cmc_rank": 1,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-11-05T17:00:00.000Z",
      "quote": {
        "INR": {
          "price": 5905120.498845478,
          "volume_24h": 3832595704298.1494,
          "volume_change_24h": 26.0403,
          "percent_change_1h": 0.87541293,
          "percent_change_24h": 3.67935887,
          "percent_change_7d": -3.4324642,
          "percent_change_30d": 12.14437272,
          "percent_change_60d": 29.91281507,
          "percent_change_90d": 24.99421091,
          "market_cap": 116792099168938.73,
          "market_cap_dominance": 59.4487,
          "fully_diluted_market_cap": 124007530475754.7,
          "tvl": null,
          "last_updated": "2024-11-05T17:01:05.000Z"
        }
      }
    },
    {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "num_market_pairs": 9477,
      "date_added": "2015-08-07T00:00:00.000Z",
      "tags": [
        "pos",
        "smart-contracts",
        "ethereum-ecosystem",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "binance-labs-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "cms-holdings-portfolio",
        "dcg-portfolio",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "fabric-ventures-portfolio",
        "framework-ventures-portfolio",
        "hashkey-capital-portfolio",
        "kenetic-capital-portfolio",
        "huobi-capital-portfolio",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "1confirmation-portfolio",
        "winklevoss-capital-portfolio",
        "usv-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "multicoin-capital-portfolio",
        "paradigm-portfolio",
        "layer-1",
        "ftx-bankruptcy-estate"
      ],
      "max_supply": null,
      "circulating_supply": 120416991.19355078,
      "total_supply": 120416991.19355078,
      "infinite_supply": true,
      "platform": null,
      "cmc_rank": 2,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-11-05T17:00:00.000Z",
      "quote": {
        "INR": {
          "price": 207127.33200671774,
          "volume_24h": 1607729738324.026,
          "volume_change_24h": 28.0166,
          "percent_change_1h": 0.9255004,
          "percent_change_24h": 2.04074771,
          "percent_change_7d": -7.71680793,
          "percent_change_30d": 1.04506739,
          "percent_change_60d": 8.69574217,
          "percent_change_90d": 2.84623688,
          "market_cap": 24941650114196.598,
          "market_cap_dominance": 12.6956,
          "fully_diluted_market_cap": 24941650114196.543,
          "tvl": null,
          "last_updated": "2024-11-05T17:01:05.000Z"
        }
      }
    },
    {
      "id": 825,
      "name": "Tether USDt",
      "symbol": "USDT",
      "slug": "tether",
      "num_market_pairs": 102376,
      "date_added": "2015-02-25T00:00:00.000Z",
      "tags": [
        "stablecoin",
        "asset-backed-stablecoin",
        "avalanche-ecosystem",
        "solana-ecosystem",
        "arbitrum-ecosytem",
        "moonriver-ecosystem",
        "injective-ecosystem",
        "bnb-chain",
        "usd-stablecoin",
        "optimism-ecosystem",
        "fiat-stablecoin"
      ],
      "max_supply": null,
      "circulating_supply": 120496629333.27373,
      "total_supply": 122337925859.0056,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
      },
      "infinite_supply": true,
      "cmc_rank": 3,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-11-05T17:00:00.000Z",
      "quote": {
        "INR": {
          "price": 84.11187408610849,
          "volume_24h": 5946446008130.255,
          "volume_change_24h": 23.4571,
          "percent_change_1h": 0.00212,
          "percent_change_24h": 0.03959361,
          "percent_change_7d": 0.01310252,
          "percent_change_30d": -0.00170843,
          "percent_change_60d": 0.06237102,
          "percent_change_90d": -0.07561086,
          "market_cap": 10135197314280.807,
          "market_cap_dominance": 5.1589,
          "fully_diluted_market_cap": 10290072215808.611,
          "tvl": null,
          "last_updated": "2024-11-05T17:01:05.000Z"
        }
      }
    },
    {
      "id": 1839,
      "name": "BNB",
      "symbol": "BNB",
      "slug": "bnb",
      "num_market_pairs": 2273,
      "date_added": "2017-07-25T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "payments",
        "smart-contracts",
        "alameda-research-portfolio",
        "multicoin-capital-portfolio",
        "bnb-chain",
        "layer-1",
        "sec-security-token",
        "alleged-sec-securities",
        "celsius-bankruptcy-estate"
      ],
      "max_supply": null,
      "circulating_supply": 144099723.1458967,
      "total_supply": 144099723.1458967,
      "infinite_supply": false,
      "platform": null,
      "cmc_rank": 4,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-11-05T17:00:00.000Z",
      "quote": {
        "INR": {
          "price": 47812.27387753556,
          "volume_24h": 130587330428.32774,
          "volume_change_24h": 2.5181,
          "percent_change_1h": 0.72972021,
          "percent_change_24h": 2.41661659,
          "percent_change_7d": -6.83948036,
          "percent_change_30d": 0.38823434,
          "percent_change_60d": 16.37026883,
          "percent_change_90d": 18.55786706,
          "market_cap": 6889735428728.664,
          "market_cap_dominance": 3.507,
          "fully_diluted_market_cap": 6889735428728.55,
          "tvl": null,
          "last_updated": "2024-11-05T17:01:05.000Z"
        }
      }
    },
    {
      "id": 5426,
      "name": "Solana",
      "symbol": "SOL",
      "slug": "solana",
      "num_market_pairs": 776,
      "date_added": "2020-04-10T00:00:00.000Z",
      "tags": [
        "pos",
        "platform",
        "solana-ecosystem",
        "cms-holdings-portfolio",
        "kenetic-capital-portfolio",
        "alameda-research-portfolio",
        "multicoin-capital-portfolio",
        "okx-ventures-portfolio",
        "layer-1",
        "ftx-bankruptcy-estate",
        "sec-security-token",
        "alleged-sec-securities",
        "cmc-crypto-awards-2024"
      ],
      "max_supply": null,
      "circulating_supply": 470911846.6783554,
      "total_supply": 587808455.2486912,
      "infinite_supply": true,
      "platform": null,
      "cmc_rank": 5,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-11-05T17:00:00.000Z",
      "quote": {
        "INR": {
          "price": 14163.38632754229,
          "volume_24h": 273047103679.98633,
          "volume_change_24h": 27.3446,
          "percent_change_1h": 1.53470956,
          "percent_change_24h": 5.17001313,
          "percent_change_7d": -7.80777039,
          "percent_change_30d": 15.95117114,
          "percent_change_60d": 33.48435859,
          "percent_change_90d": 13.75661255,
          "market_cap": 6669706410721.91,
          "market_cap_dominance": 3.3942,
          "fully_diluted_market_cap": 8325358238283.259,
          "tvl": null,
          "last_updated": "2024-11-05T17:01:05.000Z"
        }
      }
    }
  ]