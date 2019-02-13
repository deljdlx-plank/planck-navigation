<?php
$navigationDescriptor = array(

    'home' => array(
        'label' => 'Accueil',
        'type' => Item::TYPE_ROUTE,
        'route' => 'home',
    ),

    'programmation' => array(
        'label' => 'Programmation',
        'type' => Item::TYPE_ROUTE,
        'route' => 'category',
        'parameters' => array(
            'category' => array(
                'type' => Item::PARAMETER_ENTITY,
                'entity' => Category::class,
                'loadMethod' => EntityLoader::LOAD_BY_ATTRIBUTE,
                'attributes' => array(
                    'qname' => 'programmation'
                )
            )
        )
    ),
    'about' => array(
        'label' => 'A propos',
        'type' => Item::TYPE_ROUTE,
        'route' => 'article',
        'parameters' => array(
            'category' => array(
                'type' => Item::PARAMETER_ENTITY,
                'entity' => \Planck\Extension\Content\Model\Entity\Article::class,
                'loadMethod' => EntityLoader::LOAD_BY_ATTRIBUTE,
                'attributes' => array(
                    'slug' => 'a-propos'
                )
            )
        )
    )
);


$navigationContainer = new \Planck\Navigation\Container();
$navigationContainer->loadByDescriptor($navigationDescriptor);


