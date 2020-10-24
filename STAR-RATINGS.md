# Star ratings

Use this [star rating library for Vue](https://github.com/craigh411/vue-star-rating). Use the CDN method for loading the libary by putting this in `index.html`:

```
<script src="https://unpkg.com/vue-star-rating@next/dist/VueStarRating.umd.min.js"></script>
```

In addition, you will want to create a global Vue component at the top of `script.js`:

```
Vue.component('star-rating', VueStarRating.default);
```

Once this is done, you can create a star rating element in `index.html`:
```
<star-rating @rating-selected ="setRating"></star-rating>
```

This is using the shorthand for `v-on`, described at the bottom of the [Template Syntax](https://vuejs.org/v2/guide/syntax.html) page.

You can now create a method called `setRating` in `script.js`:

```
methods: {
    setRating(rating){
      // Handle the rating
    }
  },
```

You should be able to refresh your page and see the star ratings in action, although our method is empty right now.

## Using Ratings

To keep track of ratings, you should add a ratings object in `script.js`:

```
    comments: {},
    ratings: {},
```

You can then set properties on this object inside of `setRating`:

```
this.ratings[this.number].sum += rating;
this.ratings[this.number].total += 1;
```

To make this work, you need to check whether the object has a rating yet:

```
      if (!(this.number in this.ratings))
        Vue.set(this.ratings, this.number, {
          sum: 0,
          total: 0
        });
      this.ratings[this.number].sum += rating;
      this.ratings[this.number].total += 1;
```

Just like with the comments, we need to use `Vue.set` to setup a new property in an object so that Vue will track it.

## On Your Own

You can now create a computed property that returns the average rating for the currently viewed comic. Once you have a computed average, you can show it in `index.html`.

You can also change the options on the star rating library so that it increments in steps of 0.5, does not show the current rating, and uses red stars. See the props section in the Star Ratings docs for help.
