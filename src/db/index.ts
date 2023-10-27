import { connect } from './pool'

connect().then(pool => console.log(pool))