<script>
export default {
    name: 'Searchbar',
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div class="search-bar">
    <div class="search-item">
        <label for="destination">Dove</label>
        <input type="text" id="destination" placeholder="Cerca destinazioni">
        <div>
            <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</div>


</template>


<style lang="scss" scoped>
@use '../style.scss' as *;

* {
    box-sizing: border-box;
}

.search-bar {
    display: flex;
    align-items: center;
    border: 1px solid --white-color;
    border-radius: 50px;
    width: 40rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-weight: 6px;
}

.search-item {
    width: 100%;
    position: relative;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.search-item:hover, .search-item-last:hover {
    background-color: gainsboro;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
}

.search-item:hover input, .search-item-last:hover input {
    background-color: gainsboro;
}

.search-item label {
    padding: 0 5px;
    font-size: 12px;
    color: rgb(85, 85, 85);
}

.search-item input {
    border: none;
    outline: none;
    padding: 0 5px;
    font-size: 14px;
    width: 100%; 
}

.search-btn {
    position: absolute;
    background-color: $green-color;
    border: none;
    border-radius: 50%;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    right: 5px;
    top: calc(50% - 22px);
}

.search-btn:hover {
    background-color: #2c9444;
}


@media (min-width: 768px) and (max-width: 1048px) {
    .search-bar{
        width: 100%;
    }
}

</style>