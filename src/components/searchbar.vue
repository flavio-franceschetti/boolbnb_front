<script>
export default {
  name: "searchbar",
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div class="search-bar">
    <div class="search-item">
      <label for="destination">Dove</label>
      <input type="text" id="destination" placeholder="Cerca destinazioni" />
    </div>
    <div class="search-item">
      <label for="checkin">Check-in</label>
      <input type="text" id="checkin" placeholder="Aggiungi data" />
    </div>
    <div class="search-item">
      <label for="checkout">Check-out</label>
      <input type="text" id="checkout" placeholder="Aggiungi data" />
    </div>
    <div class="search-item-last">
      <div class="item-last">
        <label for="guests">Chi</label>
        <input type="text" id="guests" placeholder="Aggiungi ospiti" />
      </div>
      <div>
        <button class="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../src/style.css" as *;

* {
  box-sizing: border-box;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid --white-color;
  border-radius: 40px;
  width: 35rem;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-weight: 6px;
  margin: 0 auto 3rem;
}

.search-item {
    text-align: left;
  position: relative;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
}

.search-item::before {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  bottom: 25%;
  width: 0.5px;
  background-color: gainsboro;
}

.search-item:hover::before {
  opacity: 0;
}

.search-item:hover,
.search-item-last:hover {
  background-color: gainsboro;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
}

.search-item:hover input,
.search-item-last:hover input {
  background-color: gainsboro;
}

.search-item-last {
  padding: 0 3px;
  display: flex;
  align-items: center;
  border-radius: 40px;
}

.item-last {
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
}

.search-item label,
.search-item-last label {
  padding: 0 3px;
  font-size: 10px;
  color: rgb(85, 85, 85);
}

.search-item input,
.search-item-last input {
  border: none;
  outline: none;
  padding: 0 3px;
  font-size: 12px;
}

.search-btn {
  background-color: green;
  border: none;
  border-radius: 50%;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}

.search-btn:hover {
  background-color: lightgreen;
}
</style>
