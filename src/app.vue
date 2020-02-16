<template>
  <f7-app :params="f7Params">
    <f7-panel left cover resizable>
      <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
    </f7-panel>
    <f7-panel right reveal resizable>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>
    <f7-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="800"></f7-view>
  </f7-app>
</template>
<script>
import { f7App, f7Panel, f7View } from 'framework7-vue';
import routes from './routes.js'

export default {
  components: {
      f7App,
      f7Panel,
      f7View,
    },
  data() {
    // Demo Theme
      let theme = 'auto';
      if (document.location.search.indexOf('theme=') >= 0) {
        theme = document.location.search.split('theme=')[1].split('&')[0];
      }


    return {
      // Framework7 Parameters
      f7Params: {
          id: 'io.framework7.myapp',
          name: 'My App', // App name
          theme: 'auto', // Automatic theme detection
           // App routes
          routes: routes,
          popup: {
            closeOnEscape: true,
          },
          sheet: {
            closeOnEscape: true,
          },
          popover: {
            closeOnEscape: true,
          },
          actions: {
            closeOnEscape: true,
          },
        },

      // Login screen data
      username: '',
      password: ''
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
      var sqlite3 = require('sqlite3').verbose()
      var db = new sqlite3.Database('./database.sqlite3')

      db.serialize(function() {
        db.run('CREATE TABLE lorem (info TEXT)')

        var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
        for (var i = 0; i < 10; i++) {
          stmt.run('Ipsum ' + i)
        }

        stmt.finalize()

        var rows = document.getElementById('database')
        db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
          var item = document.createElement('li')
          item.textContent = '' + row.id + ': ' + row.info
          rows.appendChild(item)
        })
      })

      db.close()
    })
  },
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password, () => {
        this.$f7.loginScreen.close()
      })
    }
  }
}
</script>
