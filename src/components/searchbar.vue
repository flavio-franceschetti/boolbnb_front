<script>
export default {
    name: 'searchbar',
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div class="search-bar">
    <div class="search-item">
        <label for="destination">Dove</label>
        <input type="text" id="destination" placeholder="Cerca destinazioni">
    </div>
    <div class="search-item">
        <label for="checkin">Check-in</label>
        <input type="text" id="checkin" placeholder="Aggiungi data">
    </div>
    <div class="search-item">
        <label for="checkout">Check-out</label>
        <input type="text" id="checkout" placeholder="Aggiungi data">
    </div>
    <div class="search-item-last">
        <div class="item-last">
            <label for="guests">Chi</label>
            <input type="text" id="guests" placeholder="Aggiungi ospiti">
        </div>
        <div>
            <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</div>


</template>


<style lang="scss" scoped>

* {
    box-sizing: border-box;
}

.search-bar {
    display: flex;
    align-items: center;
    border: 1px solid --white-color;
    border-radius: 50px;
    width: 53rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-weight: 6px;
    margin: 0 auto 5rem;
}

.search-item {
    flex: 1;
    position: relative;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
}

.search-item::before {
  content: '';
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 0.5px;
  background-color: gainsboro;
}

.search-item:hover::before {
  opacity: 0;
}

.search-item:hover, .search-item-last:hover {
    background-color: gainsboro;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
}

.search-item:hover input, .search-item-last:hover input {
    background-color: gainsboro;
}

.search-item-last {
    flex: 1;
    padding: 0 5px;
    display: flex;
    align-items: center;
    border-radius: 50px;
}

.item-last {
    flex: 1;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
}

.search-item label, .search-item-last label {
    padding: 0 5px;
    font-size: 12px;
    color: rgb(85, 85, 85);
}

.search-item input, .search-item-last input {
    border: none;
    outline: none;
    padding: 0 5px;
    font-size: 14px; 
}


.search-btn {
    background-color: #ff385c;
    border: none;
    border-radius: 50%;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    color: white;
}

.search-btn:hover {
    background-color: #e63950;
}

</style>