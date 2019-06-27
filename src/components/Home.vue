<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="201px">
                <Nav/>
            </el-aside>
            <el-main>
                <Slide/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Nav from './Nav'
import  BlackList from './BlackList'
import Slide from './Slide'
export default {
    name:'Home',
    components:{
        Nav,
        BlackList,
        Slide
    }
}
</script>

<style>

</style>
