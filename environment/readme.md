# How to setup K6 dashboard in Graphana with influxdb

## Install

To install and start `Telegraf`, `InfluxDb` and `Graphana` execute `docker-compose up -d` command. After this you'll have a fully working db. K6 database is created because of `env.influxdb`.

## Ports

| Graphana  |  InfluxDb |
|---|---|
| 3000  |  8086 |

You can login to graphana on `http://localhost:3000`.

### Graphana default login credentials

| username  |  password |
|---|---|
| admin  |  admin |

## Add InfluxDb to Graphana

- To add `influxDb` to `Graphana` first you have to login to web ui.
- On the left sidebar select the **Gear icon ⚙** and the **Data sources** option
- Click on **Add data source** then select **InfluxDb**
- Enter a **name** for this datasource
- Enter a **url** which in our case is the container name: `http://influxdb:8086`
- Enter the **database name** which is `K6`
- Save and test

## Setup Graphana dasboard

- On the left sidebar select the **Plus icon** and the **Import**
- Upload the `k6-graphana-dashboard.json` file
- Create new folder `K6` instead using of `General`
- Select the previously created `InfluxDb`
- Import

Use the top left `Measurement` combobox to select which data would you like to see on the dashboard.
