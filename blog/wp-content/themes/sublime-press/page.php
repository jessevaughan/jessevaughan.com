<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<header id="page-heading">

<h1 class="single-title"><?php the_title(); ?></h1>
	
</header>
<!-- /page-heading -->

<article class="post clearfix">
    <div class="entry clearfix">	
    	<?php the_content(); ?> 
	</div>
	<!-- /entry -->

    <?php comments_template(); ?>

</article>
<!-- /post -->

<?php endwhile; ?>
<?php endif; ?>	  
<?php get_footer(); ?>