<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <footer class="footer">
        <div class="container links">
            <ul>
                <li><a href="http://127.0.0.1:8000/login">Login</a></li>
                <li><a href="http://127.0.0.1:8000/register">Register</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
        <div class="containerRights">
            <p>&copy; 2024 BoolBnB. All rights reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: rgb(47, 47, 47);
    color: white;
    padding: 20px 0;
    border-top: 4px solid #28a745;
}

.links {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;

        li {
            display: inline-block;
            background-color: #333;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                transform: scale(1.05);
                box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

                a {
                    color: #28a745;

                    &::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }
            }

            a {
                color: white;
                text-decoration: none;
                position: relative;
                transition: color 0.3s ease;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: -3px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #28a745;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.3s ease;
                }
            }
        }
    }
}



.containerRights {
    margin: 0 auto;
    padding: 0 15px;
    text-align: center;
}
</style>